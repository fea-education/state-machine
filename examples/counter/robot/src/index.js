const { createMachine, interpret, reduce, state, transition } = require("robot3");

const machine = createMachine("active", {
  active: state(
    transition(
      "DEC",
      "active",
      reduce((ctx) => ({ count: (ctx.count ?? 0) - 1 }))
    ),
    transition(
      "INC",
      "active",
      reduce((ctx) => ({ count: (ctx.count ?? 0) + 1 }))
    )
  ),
});

const service = interpret(machine, (s) => {
  console.log(new Date(Date.now()));
  /* @TODO How to do this?
   * console.log(`- what did juts happen? -> Event("${state._event.name}")`); */
  console.log(`- the new state is -> "${s.machine.current}".`);
  console.log(`- the new count is -> ${s.context.count}.`);
  console.log(
    `- what to do next? -> ${Array.from(s.machine.state.value.transitions)
      .map(([evt]) => evt)
      .join(",")}`
  );
});

/**
 * So far it doesn't work at all as expected! I give up for today. :P
 */

service.send("INC");
// => 1

service.send("INC");
// => 2

service.send("DEC");
// => 1
