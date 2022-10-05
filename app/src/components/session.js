export default function Session(props) {
    return (
      <nav>
        <form onSubmit={props.loginUser}>
          <label htmlFor="name">Username: </label>
          <input type="text" id="name" name="username"/>
          <label htmlFor="name">Password: </label>
          <input type="password" id="password" name="password"/>
          <input type="submit" value="login" />
        </form>
      </nav>
    )
  }