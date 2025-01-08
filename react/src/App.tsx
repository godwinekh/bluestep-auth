import SignUpForm from "./lib/components/SignUpForm";

function App() {
  return (
    <div className="container-sm h-100 bg-light">
      <div className="text-center pt-5">
        <h4>BlueStep User Sign up</h4>
        <small>Please complete the form below to proceed</small>
      </div>
      <SignUpForm />
    </div>
  );
}

export default App;
