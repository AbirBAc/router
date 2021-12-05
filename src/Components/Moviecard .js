import React from 'react';
import ReactDOM from 'react-dom';
import { Card, Col, Row } from 'antd';
import v from './v.jpg';
import t from './t.jpg';
import d from './d.jpg';


function Moviecard() {
        return (
            <div className="site-card-wrapper">
                <Row gutter={18}>
                    <Col span={8}>
                        <Card title="V for vendetta" bordered={false}>
                            <h1><img src={v} alt="v.jpg" width="200px" height="200px" /> </h1>

                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="The Invisible Man" bordered={false}>
                            <h1> <img src={t} alt="t.jpg" width="200px" height="200px" /> </h1>
                            <b> <p>Description:</p></b>When Cecilia's abusive ex takes his own life and leaves her his fortune, she suspects his death was a hoax. As a series of coincidences turn lethal, Cecilia works to prove that she is being hunted by someone nobody can see.
                            <b> <p><Card href="#https://www.imdb.com/title/tt1051906/">PosterURL </Card></p></b>
                            <b> <p>Rating:   7.1</p></b>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="The Dark Knight" bordered={false}>
                            <h1> <img src={d} alt="d.jpg" width="200px" height="200px" /> </h1>
                            <b> <p>Description:</p></b>When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.
                            <b> <p><Card href="#https://www.imdb.com/title/tt1051906/">PosterURL </Card></p></b>
                            <b> <p>Rating:  9.0</p></b>
                        </Card>
                    </Col>
                </Row>
            </div>)


    }


export default Moviecard;

