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
}

const increment = (context: CounterContext) => context.count + 1;
const decrement = (context: CounterContext) => context.count - 1;

const counterMachine = Machine<CounterContext, CounterMachine, CounterEvent>({
  initial: "active",
  context: {
    count: 0,
  },
  states: {
    active: {
      on: {
        [CounterEventType.INC]: { actions: assign({ count: increment }) },
        [CounterEventType.DEC]: { actions: assign({ count: decrement }) },
      },
    },
  },
});

const counterService = interpret(counterMachine)
  .onTransition((state) => {
    console.log(new Date(Date.now()));
    console.log(`- what did juts happen? -> Event("${state._event.name}")`);
    console.log(`- the new state is -> "${state.value}".`);
    console.log(`- the new count is -> ${state.context.count}.`);
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
