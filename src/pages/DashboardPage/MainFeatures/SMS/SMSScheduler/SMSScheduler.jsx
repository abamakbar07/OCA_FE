import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'

const SMSScheduler = () => {
  const [radioActive, setRadioActive] = useState(false)

  return (
    <div className="SMSScheduler">
      <Row className="m-0 p-0 pb-5">
        <Col className="text-left" md={8}>
          <h1>SMS Scheduller</h1>
          <Form className="Form">
            <Form.Group
              className="col-md-5 pl-0"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>Broadcast Name</Form.Label>
              <Form.Control type="text" placeholder="name of your broadcast" />
            </Form.Group>
            <Form.Group
              className="col-md-5 pl-0"
              controlId="exampleForm.ControlSelect1"
            >
              <Form.Label>Phonebook</Form.Label>
              <Form.Control as="select" placeholder="aw">
                <option value="" selected disabled>
                  Select your phonebook
                </option>
                <option>SJW Twitter</option>
                <option>SJW Instagram</option>
                <option>DKI Jakarta</option>
                <option>Bodetabek</option>
                <option>Luar Jabodetabek</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={6}
                value="Halo Bili, perkenalkan kami OCA (Omni Communication Assistant). Aplikasi berbasis web yang bisa membantu kamu menyebarkan pesan baik itu menggunakan voice ataupun text. Kamu bisa menjangkau seluruh konsumen dengan cepat, masif, dan otomatis. Info lebih lanjut kunjungi web kami 
                www.ocatelkom.co.id"
              />
              <div className="maxLengthMessage text-right">
                Character 303/1024
              </div>
            </Form.Group>
            <hr />
            <h5>Schedule</h5>
            <h6>When and how often do you want to broadcast this messages?</h6>
            <Row className="Schedule m-0 p-0 pt-3">
              <Col className="RunOn p-0" md={3}>
                Run on
              </Col>
              <Col className="" md={9}>
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check inline type="checkbox" label="Mon" />
                  <Form.Check inline type="checkbox" label="Tue" />
                  <Form.Check inline type="checkbox" label="Wed" />
                  <Form.Check inline type="checkbox" label="Thu" />
                  <Form.Check inline type="checkbox" label="Fri" />
                  <Form.Check inline type="checkbox" label="Sat" />
                  <Form.Check inline type="checkbox" label="Sun" />
                </Form.Group>
                <Row>
                  <Col md={4}>
                    <Row className="m-0 p-0">
                      <Form.Check
                        inline
                        className="Radio"
                        type="radio"
                        label="Once a day"
                        name="radioActive"
                        id="formHorizontalRadios1"
                        onClick={() => setRadioActive("onceADay")}
                      />
                      <Form.Check
                        inline
                        className="Radio pt-2"
                        type="radio"
                        label="At intervals"
                        name="radioActive"
                        id="formHorizontalRadios2"
                        onClick={() => setRadioActive("atIntervals")}
                      />
                    </Row>
                  </Col>
                  <Col md={8} className="m-0 p-0">
                    <Row className="subLabel d-block m-0 p-0">
                      <Row>
                        <div className="mt-1">At </div>
                        <Form.Control
                          className={
                            radioActive == "onceADay"
                              ? "custom-select Radio1 Active"
                              : "custom-select Radio1 Disable"
                          }
                          as="select"
                          disabled={radioActive == "onceADay" ? 0 : 1}
                        >
                          <option value="" selected disabled>
                            --
                          </option>
                          <option>1 AM</option>
                          <option>2 AM</option>
                          <option>3 AM</option>
                          <option>4 AM</option>
                          <option>5 AM</option>
                          <option>12 AM</option>
                        </Form.Control>
                        <div className="mt-1"> WIB</div>
                      </Row>

                      <Row className="pt-2">
                        <div className="">Every </div>
                        <Form.Control
                          className={
                            radioActive == "atIntervals"
                              ? "custom-select Radio1 Active"
                              : "custom-select Radio1 Disable"
                          }
                          as="select"
                          disabled={radioActive == "atIntervals" ? 0 : 1}
                        >
                          <option value="" selected disabled>
                            --
                          </option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                          <option>6</option>
                        </Form.Control>
                        <Form.Control
                          className={
                            radioActive == "atIntervals"
                              ? "custom-select Radio1 Active"
                              : "custom-select Radio1 Disable"
                          }
                          as="select"
                          disabled={radioActive == "atIntervals" ? 0 : 1}
                        >
                          <option value="" selected disabled>
                            --
                          </option>
                          <option>Hour</option>
                          <option>Minutes</option>
                        </Form.Control>
                        <div className="">from </div>
                        <Form.Control
                          className={
                            radioActive == "atIntervals"
                              ? "custom-select Radio1 Active"
                              : "custom-select Radio1 Disable"
                          }
                          as="select"
                          disabled={radioActive == "atIntervals" ? 0 : 1}
                        >
                          <option value="" selected disabled>
                            --
                          </option>
                          <option>1 AM</option>
                          <option>2 AM</option>
                          <option>3 AM</option>
                          <option>4 AM</option>
                          <option>5 AM</option>
                          <option>12 AM</option>
                        </Form.Control>
                        <div className=""> WIB</div>
                      </Row>
                    </Row>
                  </Col>
                </Row>
              </Col>

              <div className="SubmitButton btn text-white border-0 ml-auto mt-5 col-3">
                Send messages
              </div>

            </Row>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default SMSScheduler
