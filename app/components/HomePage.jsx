import axios from "axios";
class HomePage extends React.Component{
  getReq(){
    axios.get('/try')
      .then(function (res) {
        console.log('axios res: ', res);
        
      })
      .catch(function(error){
        console.log('axios error: ', error);
        
      })
  }
  getReqPost(){
    axios.post('/try', {username: 'axios'})
      .then(function (res) {
        console.log('axios res: ', res.data);
        
      })
      .catch(function(error){
        console.log('axios error: ', error);
        
      })
  }
  render(){
    return (
      <fieldset>
        <legend>This is Homepage</legend>
        <button onClick={this.getReq.bind(this)}>request get</button>
        <button onClick={this.getReqPost.bind(this)}>request post</button>
      </fieldset>
    )
  }
}

export default HomePage;
