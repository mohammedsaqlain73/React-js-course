import React from "react";
class Services extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       //----------------------or give its value null userinfo:"null"nif null show shimmer ui  since we are
       // not using  the shimmer need hard coded name ,follower and url value to use it when render 1st time without api data----------------------
      userInfo: {
        name: "dummy",
        follower: "default",
        avatar_url: "null"

      }

    }
 }
  async componentDidMount()
  {
    const data = await fetch("https://api.github.com/users/mohammedsaqlain73");
    const json = await data.json();
    this.setState({
      userInfo: json,//add the entire json to userinfo.
    })
    console.log(json);
  }

  render() {
    const { name, followers,avatar_url,type } = this.state.userInfo;
return(
    <div className="user-card">
      <h2>name:{name}</h2>
    <h3>follower:{followers}</h3>
    <img src={avatar_url}/>
    <h4>type:{type}</h4>
    </div>

)
  }
}
export default Services;

