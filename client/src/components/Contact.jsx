import React,{useState} from "react";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
const axios = require('axios').default;
function Contact() {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [subject,setSubject] = useState("");
  const [msg,setMsg] = useState("");
  const [btnMsg,setBtnMsg] = useState("Submit");
  function handleSubmit(event) {
    event.preventDefault();
    const obj = {
      name:name,
      email:email,
      subject:subject,
      msg:msg
    }
    axios
    .post("/contact",obj)
    .then(res => {
      console.log(res.data);
      if(res.data==="success") {
        setBtnMsg("Done!");
        setName("");
        setEmail("");
        setSubject("");
        setMsg("");
      }
    })
    console.log("herehere");
  }
  function type(event) {
    let name = event.target.name;
    let val = event.target.value;
    if(name==="name") {
      setName(val)
    }
    else if(name==="email")
    setEmail(val);
    else if(name==="subject")
    setSubject(val);
    else if(name==="msg")
    setMsg(val);
  }
  return(
    <div id="contact" className="about contact-form">
    <h3>Contact</h3>
    <div className="form">
<Form onSubmit={handleSubmit}>
  <Row className="mb-3">
    <Form.Group as={Col} >
      <Form.Label>Your Name</Form.Label>
      <Form.Control onChange={type} name="name" value={name} style={{outline:"none",border:"1px solid #8444df"}} className="shadow-none" type="text" />
    </Form.Group>

    <Form.Group variant="shadow-none" as={Col} controlId="formGridPassword">
      <Form.Label>Your Email</Form.Label>
      <Form.Control onChange={type} name="email" value={email} style={{outline:"none",border:"1px solid #8444df"}} className="shadow-none" type="email" placeholder="xyz@abc.com" />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" >
    <Form.Label>Subject</Form.Label>
    <Form.Control onChange={type} name="subject" value={subject} style={{outline:"none",border:"1px solid #8444df"}} className="shadow-none" type="text"/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Control onChange={type} name="msg" value={msg} style={{outline:"none",border:"1px solid #8444df"}} className="shadow-none" as="textarea" rows={3} placeholder="Your message" />
  </Form.Group>
  <div className="btn-submit">
  <Button style={{backgroundColor:"#8444df",color:"white",padding:"10px 40px 10px 40px"}} type="submit" variant="this-btn rounded-pill shadow-none">{btnMsg}</Button>{' '}
</div>
</Form>
</div>
</div>
  );
}
export default Contact;
