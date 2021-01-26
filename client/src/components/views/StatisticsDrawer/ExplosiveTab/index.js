import React from 'react';
import { Collapse, Tag } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBiohazard } from '@fortawesome/free-solid-svg-icons';
import "../statistics.css"

const { Panel } = Collapse;


export default function ExplosiveTab() {
    return (
        <Collapse
            bordered={false}
            defaultActiveKey={['1','2','3']}
            expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
            className="site-collapse-custom-collapse"
        >
            <Panel header="Obus Conon (153)" key="1" className="site-collapse-custom-panel">
                <Tag className="tagstat"><FontAwesomeIcon icon={faBiohazard} className="icon" />wad el ghamboul (2)</Tag>
                <Tag className="tagstat"><FontAwesomeIcon icon={faBiohazard} className="icon" />Bouchon 55 (1)</Tag>
                <Tag className="tagstat"><FontAwesomeIcon icon={faBiohazard} className="icon" />Visiteur legreidatt (30)</Tag>
                <Tag className="tagstat"><FontAwesomeIcon icon={faBiohazard} className="icon" />Tengerade (120)</Tag>                
            </Panel>
            <Panel header="Obus Mortier (20)" key="2" className="site-collapse-custom-panel">
                <Tag className="tagstat"><FontAwesomeIcon icon={faBiohazard} className="icon" />Toueijinine (2)</Tag>
                <Tag className="tagstat"><FontAwesomeIcon icon={faBiohazard} className="icon" />Dique de protection (18)</Tag>
            </Panel>
            <Panel header="Blue63 (154)" key="3" className="site-collapse-custom-panel">
                <Tag className="tagstat"><FontAwesomeIcon icon={faBiohazard} className="icon" />wad el ghamboul (2)</Tag>
                <Tag className="tagstat"><FontAwesomeIcon icon={faBiohazard} className="icon" />Mbalket ehel oudeika (122)</Tag>
                <Tag className="tagstat"><FontAwesomeIcon icon={faBiohazard} className="icon" />Adet bessighane (30) </Tag>
            </Panel>
        </Collapse>
    )
}
