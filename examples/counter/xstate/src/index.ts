import { Machine, interpret, assign } from "xstate";

interface CounterMachine {
  states: {
    active: {};
  };
}

enum CounterEventType {
  INC = "INC",
  DEC = "DEC",
}

type CounterEvent = { type: CounterEventType.INC } | { type: CounterEventType.DEC };

interface CounterContext {
  count: number;
  transitions: number;
}

const counterMachine = Machine<CounterContext, CounterMachine, CounterEvent>({
  initial: "active",
  context: {
    count: 0,
    transitions: 0,
  },
  states: {
    active: {
      on: {
        [CounterEventType.INC]: {
          actions: assign((context: CounterContext) => ({
            count: context.count + 1,
            transitions: context.transitions + 1,
          })),
        },
        [CounterEventType.DEC]: {
          actions: assign((context: CounterContext) => ({
            count: context.count - 1,
            transitions: context.transitions + 1,
          })),
        },
      },
    },
  },
});

const counterService = interpret(counterMachine)
  .onTransition((state) => {
    console.log(new Date(Date.now()));
    console.log(`- what did juts happen? -> Event("${state._event.name}")`);
    console.log(`- the new state is -> "${state.value}".`);
    console.log(`- the new context is -> ${JSON.stringify(state.context)}.`);
    console.log(`- what to do next? -> ${state.nextEvents.join(" || ")}`);
  })
  .start();
// => 0

counterService.send(CounterEventType.INC);
// => 1

counterService.send(CounterEventType.INC);
// => 2

counterService.send(CounterEventType.DEC);
// => 1
