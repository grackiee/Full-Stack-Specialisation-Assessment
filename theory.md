# Full Stack Assessment 

## Theory Questions 

### 1. In design Heuristics, what does the term “advantages of Matching between system and the real world” mean? What are the advantages? 


“Matching between system and the real world” in design heuristics is referring to the principle that a system should be designed with real world user experiences in mind. This means using familiar language and concepts and following real world conventions. 

The advantages to matching between system and the real world are: 

- It makes the system easier to learn and use, therefore reducing the mental load on the user. This means the system is more efficient, as users are more familiar with the terminology and concepts. 

- It can reduce errors – when users are more familiar with the system from the start, they are less likely to make mistakes. 

- It can improve communication – when users and designers share an understanding of the system, they can communicate more effectively. 

- It can make it more enjoyable to use – when users are interacting with the system in a natural way, they may enjoy it more, leading to increased engagement and loyalty. 

 
### 2. What do you understand by “Single source of truth”? and how does it relate to redux? What are the advantages? 

 
A single source of truth is a principle that ensures that all data related to a particular entity is stored in a single location. This means that there is no inconsistency or duplication of data, and everyone who needs access to the data can find it in one place. 

In Redux, the single source of truth is the store. The store is an object that holds the entire state of the application. All components in the application can access the state through the store, and changes to the state can only be made through actions. 

The advantages of using a single source of truth in Redux include: 

- Consistency: All data is stored in one place, so there is no inconsistency or duplication. 

- Efficiency: Only one copy of the data needs to be stored, so it is more efficient to access and update. 

- Reliability: The data is less likely to be corrupted or lost, as there is only one copy. 

- Scalability: The store can be easily scaled to handle large amounts of data. 

- Debugging: It is easier to debug applications that use a single source of truth, as there is only one place to look for the data. 

 
### 3. What is the difference between a stateless component and a stateful component in React? 

The main difference between a stateless component and a stateful component in React is that a stateless component does not have any state, while a stateful component does. 

A stateless component is a function that takes props as input and returns JSX as output. The props are the data that is passed to the component from its parent component. The stateless component does not have any internal state, so it always renders the same output, regardless of the props or the current state of the application. 

A stateful component is a class that has state and props. The state is the data that is stored inside the component, and it can be changed over time. The props are the data that is passed to the component from its parent component. The stateful component renders different output depending on the props and the current state of the application. 

Example of a stateless component: 

`const MyComponent = (props) => { 
  return <h1>Hello, {props.name}</h1>; 
}; `
 

It akes a prop called name as input and renders an h1 tag with the value of the name prop. The component does not have any state, so it always renders the same output, regardless of the props or the current state of the application. 

Example of a stateful component: 

`class MyComponent extends React.Component { 
  state = { 
    name: 'John Doe', 
  }; 
 
  handleChangeName = (event) => { 
    this.setState({ 
      name: event.target.value, 
    }); 
  }; 
 
  render() { 
    return <h1>Hello, {this.state.name}</h1>; 
  } 
} `
 

This component has a state variable called name. The value of the name variable can be changed by calling the handleChangeName() method. The handleChangeName() method takes an event object as input and updates the state of the component. The component renders an h1 tag with the value of the name state variable. 

Stateless components are preferred for components that do not need to maintain any state. Stateful components are preferred for components that need to maintain some state, such as the current user's name or the number of items in a shopping cart. 

The best choice for a particular component will depend on the specific needs of the application. 

- Performance: Stateless components are generally more performant than stateful components, because they do not need to update their state every time the props or the current state of the application changes. 

- Reusability: Stateless components are generally more reusable than stateful components, because they do not depend on any state from their parent components. 

- Complexity: Stateless components are generally simpler than stateful components, because they do not need to manage state. 

 
### 4. List out the advantages and disadvantages of exploratory testing (used in Agile) and scripted testing? 

Exploratory testing 

Advantages:  

- It is flexible and can be adapted to changing requirements. 

- It can find unexpected bugs that scripted testing may miss. 

- It can help testers to learn the system better. 

- It can be more efficient than scripted testing, as testers can focus on the areas that are most likely to have bugs. 

Disadvantages:  

- It can be less thorough than scripted testing. 

- It can be more time-consuming to learn and master. 

- It can be more difficult to reproduce bugs found during exploratory testing. 

Scripted testing 

Advantages:  

- It is more thorough than exploratory testing. 

- It is easier to reproduce bugs found during scripted testing. 

- It is easier to automate than exploratory testing. 

Disadvantages:  

- It can be less flexible and may not be able to adapt to changing requirements. 

- It can miss unexpected bugs that exploratory testing may find. 

- It can be more time-consuming to create and maintain scripted tests. 

Exploratory testing and scripted testing are both valuable testing techniques, and the best approach to use will depend on the specific project and its requirements. 

 
