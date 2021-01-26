import React from 'react'
import { Row, Col, Form, Select, Descriptions, Divider, Tag, Image } from 'antd';
import "./landmines.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBiohazard, faBomb, faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import {FindOnMap} from "../../../hooks/findOnMap";
import datas from '../../../helpers/landmineDatas'

// const landmines = [
//     { label: (<><FontAwesomeIcon icon={faBiohazard} /> Tazezmout1</>), value: 'tazezmout1' },
//     { label: (<><FontAwesomeIcon icon={faBiohazard} /> Tazezmout2</>), value: 'tazezmout2' },
//     { label: (<><FontAwesomeIcon icon={faBiohazard} /> Tazezmout3</>), value: 'tazezmout3' },
//     { label: (<><FontAwesomeIcon icon={faBiohazard} /> Tazezmout4</>), value: 'tazezmout4' },
//     { label: (<><FontAwesomeIcon icon={faBiohazard} /> Tazezmout5</>), value: 'tazezmout5' },
// ]

const { Option } = Select;


export default function Landmines() {

    const handleChange = (value) => {
     FindOnMap(value);
    }
    
    return (
        <div>
            <Row>
                <Form>
                    <Form.Item label='Selectionez un champ de mines'>
                        <Select
                            showSearch
                            size="large"
                            defaultValue=""
                            style={{ minWidth: 400 }}
                            optionFilterProp="children"
                            filterOption={(input, option) =>
                                option.key.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                // console.log(option)
                            }
                            // onChange={handleChange}
                        >
                            {/* <Option key="tazezmout1" value="tazezmout1"><FontAwesomeIcon icon={faBiohazard} className="icon" />Tazezmout1</Option>
                            <Option key="tazezmout2" value="tazezmout2"><FontAwesomeIcon icon={faBiohazard} className="icon" />Tazezmout2</Option>
                            <Option key="tazezmout3" value="tazezmout3"><FontAwesomeIcon icon={faBiohazard} className="icon" />Tazezmout3</Option>
                            <Option key="tazezmout4" value="tazezmout4"><FontAwesomeIcon icon={faBiohazard} className="icon" />Tazezmout4</Option>
                            <Option key="tazezmout5" value="tazezmout5"><FontAwesomeIcon icon={faBiohazard} className="icon" />Tazezmout5</Option> */}
                            {
                                datas.map((el) => (
                                    <Option key={el.Num} value={el.Num} ><FontAwesomeIcon icon={faBiohazard} className="icon" />{el.Noms}</Option>
                                ))
                            }
                        </Select>
                    </Form.Item>
               </Form>
            </Row>
            <Row>
                <h1><FontAwesomeIcon icon={faBiohazard} className="icon" />Tazezmout1 </h1>
            </Row>
            <Row>
                <div style={{display:'flex', flexDirection:'column'}}>
                    <h3>Statut du champ de mines</h3>
                    <Tag style={{fontSize:21, padding:"10px 5px", marginBottom:20}} color="green"><FontAwesomeIcon icon={faSyncAlt} style={{ marginRight: 10, color: 'green' }} /> Deminage en cours...</Tag>
                    <Descriptions label="Coordonees geographiques" bordered>
                        <Descriptions.Item label="Latitude">21° 17' 30"</Descriptions.Item>
                        <Descriptions.Item label="Longitude">14° 59' 60"</Descriptions.Item>
                    </Descriptions>
                </div>
            </Row>
            <Divider orientation="left">Gallerie des mines</Divider>
            <Row gutter={10} className="rowContainer" wrap={false}>
                <Col>
                    <Image src={require('../../assets/img/2.jpg')} height={170} width="auto" alt="" className="rowItem" preview={true} />
                </Col>
                <Col>
                    <Image src={require('../../assets/img/1.jpg')} height={170} width="auto" alt="" className="rowItem" preview={true} />
                </Col>
                <Col>
                    <Image src={require('../../assets/img/3.jpg')} height={170} width="auto" alt="" className="rowItem" preview={true} />
                </Col>
                <Col>
                    <Image src={require('../../assets/img/4.jpg')} height={170} width="auto" alt="" className="rowItem" preview={true} />
                </Col>
                <Col>
                    <Image src={require('../../assets/img/5.jpg')} height={170} width="auto" alt="" className="rowItem" preview={true} />
                </Col>
            </Row>
            <Divider orientation="left">Explosifs de guerre dans le champs de mines ( 13 )</Divider>
            <Row>
                <Tag className="bombTag"><FontAwesomeIcon icon={faBomb} className="icon" />Obus Conon</Tag>
                <Tag className="bombTag"><FontAwesomeIcon icon={faBomb} className="icon"/>Obus Mortier</Tag>
                <Tag className="bombTag"><FontAwesomeIcon icon={faBomb} className="icon"/>Roquette PG7</Tag>
                <Tag className="bombTag"><FontAwesomeIcon icon={faBomb} className="icon" />REG</Tag>
                <Tag className="bombTag"><FontAwesomeIcon icon={faBomb} className="icon"/>Obus Mortier</Tag>
                <Tag className="bombTag"><FontAwesomeIcon icon={faBomb} className="icon"/>Roquette PG7</Tag>
                <Tag className="bombTag"><FontAwesomeIcon icon={faBomb} className="icon"/>REG</Tag>
            </Row>
        </div>
    )
}
