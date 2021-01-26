import React from 'react';
import { Row, Col, Statistic, Tabs } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBiohazard, faBomb, faTasks } from '@fortawesome/free-solid-svg-icons';
import './statistics.css';
import LandminesTab from './LandminesTab';
import ExplosiveTab from './ExplosiveTab';
import ActivityTab from './ActivityTab';

const { TabPane } = Tabs;

export default function Statistics() {
    return (
        <div>
            <Row>
                <Col span={24}>
                    <Tabs defaultActiveKey="1" style={{ marginBottom: 32 }}>
                        <TabPane
                            tab={<Statistic title="Champs de mines" value={1128} valueStyle={{ fontSize: 24 }} prefix={<FontAwesomeIcon icon={faBiohazard} className="icon" />} />}
                            key="1"
                        >
                            <LandminesTab />
                        </TabPane>
                        <TabPane
                            tab={<Statistic title="Explosifs de guerre" value={93} valueStyle={{ fontSize: 24 }} prefix={<FontAwesomeIcon icon={faBomb} className="icon" />} />}
                            key="2"
                        >
                            <ExplosiveTab />
                        </TabPane>
                        <TabPane
                            tab={<Statistic title="Activités realisées" value={93} valueStyle={{ fontSize: 24 }} prefix={<FontAwesomeIcon icon={faTasks} className="icon" />} />}
                            key="3"
                        >
                            <ActivityTab />
                        </TabPane>
                    </Tabs>
                </Col>
            </Row>
        </div>
    )
}
