1. What problem does the context API help solve?
context API enables us to share specific forms of data across all levels of the application. It solves the problem of prop drilling


1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
In my own words, actions are the tasks that are set out to be accompished, or the instructions that are then consumed by the reducers to be passed through the specific pieces that they need to, so that they can fill out the gaps of info that the action is creating through its tasks. The store is where all of them go to meet and live and can then be pushed around. The store is the representation of everything that changes.



1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
Application state is global, and component state is local. It depends on the situation, but if you had a component that needed only to be updated in its specific area than you’d use that over application. Where you’d use application state when you want to make wide changes globally.


1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
Thunk is middle wear that  lets you call action creators that return a function instead of an action object. Action creators are a  function that creates an action. Or in other words, an action creator is a function that returns an action object



1. What is your favorite state management system you've learned and this sprint? Please explain why!

Redux, actually, its the easiest form for me to be able to visuallize where evyerhting is going and when. The set up is a bit much and sometimes I get lost in creating things, but once they are created it’s easy to pass information around.
