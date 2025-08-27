import Userf from "./userf";
import Userc from "./userclasscomponent";
const About = () => {
  return (
    <div className="about-container">
      <h1>About Our Food App</h1>
      <p>
        Welcome to [Your App Name]! We are passionate about connecting food lovers with delicious meals and culinary experiences.
        Our mission is to make ordering food easy, convenient, and enjoyable for everyone.
      </p>
       <Userf />
      < Userc />
    </div>
  );
};

export default About;
