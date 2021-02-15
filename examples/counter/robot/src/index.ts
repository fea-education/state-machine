import { createMachine, interpret, reduce, state, transition } from "robot3";

const machine = createMachine(
  "active",
  {
    active: state(
      transition(
        "DEC",
        "active",
        /* @TODO: TypeScript Support??? */
        reduce((ctx: { count: number }, evt) => {
          console.log(evt, ctx);
          return { count: ctx.count + 1 };
        })
      ),
      transition(
        "INC",
        "active",
        /* @TODO: TypeScript Support??? */
        reduce((ctx: { count: number }, evt) => {
          console.log(evt, ctx);
          return { count: ctx.count + 1 };
        })
      )
    ),
  },
  () => ({ count: 10 })
);

const service = interpret(
  machine,
  (s) => {
    console.log(new Date(Date.now()));
    /* @TODO How to do this?
     * console.log(`- what did juts happen? -> Event("${state._event.name}")`); */
    console.log(`- the new state is -> "${s.machine.current}".`);
    /* @TODO somehow this is not linked to the context used in the machine!?!?!?! */
    console.log(`- the new count is -> ${(s.machine.context as { count: number }).count}.`);
    /* @TODO How to do this?
     * console.log(`- what to do next? -> ${state.nextEvents.join(" || ")}`);*/
  },
  { count: 0 }
);

/**
 * So far it doesn't work at all as expected! I give up for today. :P
 */

service.send("INC");
// => 1

service.send("INC");
// => 2

service.send("DEC");
// => 1
