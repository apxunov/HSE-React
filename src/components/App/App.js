import React from 'react'
import '../App/App.scss';

// Импорт компонентов
import MyTodoList from '../MyTodoList/MyTodoList'
import Switch from '../UI/Switch/Switch'

class App extends React.Component {
  state = {
    theme: "light",
    tasks: [
      {
        id: 1,
        name: 'Buy milk',
        description: '20 packages of Parmalat 1.5%',
        completed: true
      },
      {
        id: 2,
        name: 'Write a review',
        description: 'Write a review for season 1 of the series "Love Death + Robots"',
        completed: false
      },
      {
        id: 3,
        name: 'Find ball and sneakers',
        description: "We'll play basketball this Wednesday",
        completed: true
      },
      {
        id: 4,
        name: 'Take a pizza cooking lesson',
        description: 'Ur gf bet she cooks better🤢',
        completed: true
      },
      {
        id: 5,
        name: 'Visit parents',
        description: 'This weekend we might go for a walk. Go visit a restaurant on Kitay-Gorod',
        completed: true
      },
    ]
  };

  handleTaskStatus = (taskID) => {
    const taskToChange_id = this.state.tasks.findIndex((task) => task.id === taskID); // находим id таски, которую нужно изменить 
    this.setState((currentState) => {
      const newTasksList = [...currentState.tasks] // дублируем стейт
      newTasksList[taskToChange_id] = { ...newTasksList[taskToChange_id], completed: !currentState.tasks[taskToChange_id].completed } // инвертируем булевое значение
      return {
        tasks: newTasksList // сетим новым стейт
      }
    })
  }

  submitHandler = (name, value) => {
    name&&value ? this.setState( (currentState) => { // если поля desription и name заполнены.. 
      const newTasksList = [...currentState.tasks] // дублируем таски из стейта
      const tasksLastID = newTasksList.length // присвоем IDшник новой таске = +1 к последнему таскID из стейта
      newTasksList[tasksLastID] = { // если name и desciption заполнены..
        id: tasksLastID+1, // то творим новый объект для нового таска
        name: name,
        description: value,
        completed: false
      } 

      return {
        tasks: newTasksList //.. то обновляем стейт
      }
    })
    : alert('Enter name and description!') // ..а если пусты, то алёртим пользователя, чтобы тот внес данные
  }

  render() {
    return (
      <div className='tasks-wrapper__layout'>
        <Switch/>
        <MyTodoList 
            tasks={this.state.tasks}
            submitHandler={this.submitHandler}
            handleTaskStatus={this.handleTaskStatus}
        />
    </div>
    )
  }
}

export default App;
