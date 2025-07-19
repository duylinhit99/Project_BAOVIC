function Login() {
  return (
    <div className="col-sm-4 col-sm-offset-1">
      <div className="login-form">
        <h2>Login to your account</h2>
        <form action="#">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email Address" />
          <span>
            <input type="checkbox" className="checkbox" />
            Keep me signed in
          </span>
          <button type="submit" className="btn btn-default">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
