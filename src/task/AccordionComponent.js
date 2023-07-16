import React, { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import "./style.css"


function AccordionComponent() {

  const [form, setForm] = useState({
    sectionheader: "",
    sectiondetails: ""
  })

  const [data, setData] = useState([])

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setData([...data, form])
    setForm({
      sectionheader: "",
      sectiondetails: ""
    })
  }
  console.log([...data]);

  return (
    <>
      <h3 class="col-md-4  mb-3 text-center text-danger" style={{ marginLeft: "100px" }}>Add Section</h3>
      <div class="container" style={{ display: "flex", }}>
        <div>
          <form onSubmit={handleSubmit} style={{ boxShadow: "2px 6px 6px aqua", width: "500px", height: "340px" }}>
            <div class="col-md-4 mb-3" style={{ width: "400px", marginLeft: "50px" }}>
              <label class="form-label"><strong>Section Header</strong></label>
              <input type="text" class="form-control" style={{border:"1px solid blue"}} onChange={handleChange} name='sectionheader' value={form.sectionheader} />
            </div>
            <div class="col-md-4  mb-3" style={{ width: "400px", marginLeft: "50px" }}>
              <label class="form-label"><strong>Section Details</strong></label>
              <textarea type="text" rows={4} class="form-control" style={{border:"1px solid blue"}} onChange={handleChange} name='sectiondetails' value={form.sectiondetails} />
            </div>
            <button type='submit' style={{ width: "400px", marginLeft: "50px" }} class="col-md-4  btn btn-outline-primary btn-block">Add</button>
          </form>
        </div>
        <div>
          {data.map((item) => {
            return <div className=" mt-4" style={{width:"600px", marginLeft:"30px" }}> <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>{item.sectionheader}</Accordion.Header>
                <Accordion.Body>
                  <strong>{item.sectiondetails}</strong>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion></div>
          })}
        </div>
      </div>

    </>
  )
}

export default AccordionComponent