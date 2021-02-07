# State Machine

## Summary

    The bugs in our software are a result of actions dispatched in a wrong state and/or at the wrong time. They leave our app in a state that we don’t know about, and this breaks our program or makes it behave incorrectly. Of course, we don’t want to be in such a situation. State machines are good firewalls. They protect us from reaching unknown states because we set boundaries for what can happen and when, without explicitly saying how.

_Quelle: [The Rise Of The State Machines (04.01.2018)](https://www.smashingmagazine.com/2018/01/rise-state-machines/)_

    Sometimes we need something more sophisticated and complex, and that's when a finite state machine cannot help us.

    Statecharts are an extension of traditional finite state machines, the main difference of statecharts is that it can have a hierarchical state, states can contain nested state inside them. The reason for this is simple, not all applications in the world can be described as flat multi numbers of states, sometimes we need to have nested states.

    Statecharts also bring us a few extra features such as actions, entry and exit actions, guard conditions, deferred events, etc.

_Quelle: [Awesome Finite State Machines](https://github.com/leonardomso/awesome-fsm#statecharts)_

## To Read

- [Awesome Finite State Machines](https://github.com/leonardomso/awesome-fsm)
- [Welcome to the world of Statecharts](https://statecharts.github.io/)
- [How to use statecharts](https://statecharts.github.io/how-to-use-statecharts.html)
- [Statecharts in User Interfaces](https://statecharts.github.io/use-case-statecharts-in-user-interfaces.html)
