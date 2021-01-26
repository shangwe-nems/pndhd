import React, {useState} from 'react';
import { Avatar, Button, Divider, Drawer, Popover, Select } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faChartBar, faCheck, faCog, faCogs, faFilter, faHome, faQuestion, faSearch, faSignOutAlt, faSync, faTimes, faUserCog } from '@fortawesome/free-solid-svg-icons'
import { withGoogleMap, withScriptjs, GoogleMap, Marker, InfoWindow } from "react-google-maps";
import { compose, withProps } from "recompose";

// import Footer from '../Footer';
import './mainpage.css';
import Statistics from '../StatisticsDrawer';
import Landmines from '../LandminesDrawer';
import Settings from '../SettingsDrawer';
import Form from 'antd/lib/form/Form';
import datas from '../../../helpers/landmineDatas';
import {FindOnMap} from '../../../hooks/findOnMap';

const { Option } = Select;

const MapComponent = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `100vh` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
)((props) => {
    const [selectedMine, setSelectedMine] = useState(null);
    const Coordinates = FindOnMap(45);
    return (
        <GoogleMap
            defaultZoom={Coordinates.defaultZoom}
            defaultCenter={{ lat:Coordinates.lat, lng: Coordinates.lng }}
        >
            {/* {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />} */}
            {
                datas.map((data) => (
                    <Marker  key={data.Num} position={{ lat: data.DS_Latitude, lng: data.DS_Longitude }} onClick={() => setSelectedMine(data)}/>
                ))
            }
            {/* display infos on map click */}
            {selectedMine &&
                (<InfoWindow position={{ lat: selectedMine.DS_Latitude, lng: selectedMine.DS_Longitude }} onCloseClick={() => setSelectedMine(null)}>
                    <div>champs de mine : {selectedMine.Noms}</div>
                </InfoWindow>)}

    </GoogleMap>
   )
});


const content = (
    <div style={{width:300, display:"flex", flexDirection:'column', alignItems:"center", padding:"20px 0px"}}>
        <Avatar size={80}><p style={{fontSize:32}}>NS</p></Avatar>
        <p style={{fontSize:16, fontWeight:'bold', margin:0, marginTop:10}}>Nehemie Shangwe</p>
        <p style={{fontSize:14}}>shangwe.nehms@google.com</p>
        <Button shape="round"><p style={{ fontWeight: 'bold', margin: 0 }}>Gérez votre compte PNDHD</p></Button>
        <Divider />
        <Button><FontAwesomeIcon icon={faSignOutAlt} className="icon" /> Se deconnecter</Button>
    </div>
);

const filter = [
    { label: (<><FontAwesomeIcon icon={faFilter} className="icon" style={{color: 'black'}} />Toutes categories</>), value: "all" },
    { label: (<><FontAwesomeIcon icon={faSync} className="icon" style={{color: 'green'}} />Deminage en cours...</>), value: "loading" },
    { label: (<><FontAwesomeIcon icon={faCheck} className="icon" style={{color: 'dodgerblue'}} />Deminage Termine</>), value: "done" },
    { label: (<><FontAwesomeIcon icon={faTimes} className="icon" style={{color: 'red'}} />Demingage suspendu</>), value: "suspespended" },
    {label:(<><FontAwesomeIcon icon={faQuestion} className="icon" style={{color: 'gray'}} />Non identifié</>), value: "n-identified"},
]

const contentFilter = (
    <div style={{width:250}}>
        <Form>
            <fieldset>
                <legend style={{borderRadius:0}}>Filtrer les donnees: </legend>
                <Select options={filter} defaultValue="all" style={{minWidth:'100%'}} />
            </fieldset>
        </Form>
    </div>
);

export default function MainPage() {
    const [visibleStats, setvisibleStats] = useState(false);
    const [visibleField, setvisibleField] = useState(false);
    const [visibleSettings, setvisibleSettings] = useState(false);
    

    const showDrawerStats = () => {
        setvisibleStats(true);
    }

    const onCloseStats = () => {
        setvisibleStats(false);
    };

    const showDrawerField = () => {
        setvisibleField(true);
    }

    const onCloseField = () => {
        setvisibleField(false);
    };

    const showDrawerSettings = () => {
        setvisibleSettings(true);
    }

    const onCloseSettings = () => {
        setvisibleSettings(false);
    };

    return (
        <div className="mainContainer">
             {/* map------------------------------ */}
            {/* <div style={{height:'100%', width:'100%'}}>
                <MapComponent isMarkerShown="true"/>
            </div> */}
            {/* end of map------------------------- */}
            <div style={{ position: 'absolute', top: 0, width: '100%', padding:"5px 10px", backgroundColor: 'rgba(255, 255, 255, .8)', borderRadius:0 }}>
                <div style={{width: '100%', display:'inline-flex', justifyContent:'space-between', borderBottom:"1px solid #d4d2d1", borderRadius:0, paddingBottom:5}}>
                     <div style={{ display: 'inline-flex', alignItems: 'center',  }}>
                        <Avatar src={require('../../assets/img/logo.png')} size={80} style={{margin:"8px 5px"}} /> 
                        <div style={{marginLeft:20}}>
                            <p style={{margin:0, fontSize: 16, fontWeight:'bold'}}>PNDHD</p>
                            <p style={{ margin: 0, fontSize: 14, fontWeight: 'bold' }}>PROGRAMME NATIONAL DE DEMINAGE HUMANITAIRE POUR LE DEVELOPPEMENT</p>
                            <p style={{ margin: 0, fontSize:12 }}>Ministères de l'interieur et de la décentralisation</p>
                            {/* REPUBLIQUE ISLAMIQUE DE LA MAURITANIE */}
                        </div>
                    </div>
                    <div style={{display:'inline-flex', alignItems:'center'}}>
                        <Popover placement="bottomRight" content={contentFilter} trigger="click" style={{ marginRight: 20 }}>
                            <Avatar size={50} icon={<FontAwesomeIcon icon={faFilter} />} style={{margin:5}}/>
                        </Popover>
                        <Popover placement="bottomRight" content={content} trigger="click">
                            <Avatar size={50} icon={<FontAwesomeIcon icon={faUserCog} />} style={{margin:5}}/>
                        </Popover>
                    </div>
                </div>
            </div>
           
           
            <div style={{ position: 'absolute', bottom: 20, width: '100%', display:"flex", justifyContent: 'center' }}>
                <div className="mainMenu">
                    <span className="menuItem" onClick={showDrawerField}><FontAwesomeIcon icon={faSearch} className="icon" /> Rechercher</span>|
                    <span className="menuItem" onClick={showDrawerStats}><FontAwesomeIcon icon={faChartBar} className="icon" /> Statistiques</span>|
                    <span className="menuItem" onClick={showDrawerSettings}><FontAwesomeIcon icon={faCogs} className="icon" /> Paramètres</span>
                </div>
            </div>
            <Drawer
                title={(<><FontAwesomeIcon icon={faChartBar} className="icon" /> Statistiques</>)}
                placement="right"
                closable={true}
                onClose={onCloseStats}
                visible={visibleStats}
                width={650}
                mask={false}
                closeIcon={(<FontAwesomeIcon icon={faArrowRight} />)}
            >
                <Statistics />
            </Drawer>
            <Drawer
                title={(<><FontAwesomeIcon icon={faSearch} className="icon" />RECHERCHE</>)}
                placement="right"
                closable={true}
                onClose={onCloseField}
                visible={visibleField}
                width={650}
                mask={false}
                closeIcon={(<FontAwesomeIcon icon={faArrowRight} />)}
            >
                <Landmines />
            </Drawer>
            <Drawer
                title={(<><FontAwesomeIcon icon={faCogs} className="icon" /> Paramètres</>)}
                placement="right"
                closable={false}
                onClose={onCloseSettings}
                visible={visibleSettings}
                width={650}
            >
                <Settings />
            </Drawer>
        </div>
    )
}
