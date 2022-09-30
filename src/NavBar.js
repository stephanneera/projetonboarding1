
import React from 'react';
import {Nav,NavItem, NavLink, Input, InputGroup,Button} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown, faUser, faHouse} from '@fortawesome/free-solid-svg-icons'
import Chaussures from './Chaussures.js'
import {connect} from 'react-redux';





function NavBar(props) {

  
  var chaussureList = []
  for (let i = 0; i < 10; i++) {
    chaussureList.push(<Chaussures/>);
  }
  var divstyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  };
 return (
  <div>
  <div>
    <Nav tabs
    style={{
      padding : '10px',
    }}
    >
      <NavItem>
        <NavLink href="#">
        <FontAwesomeIcon 
            style={{
              color: 'black',
              fontSize: '25px'
            }}
          icon={faHouse} />
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink 
        style={{
          color: 'black',
        }}
        href="#">
        FEMME
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink 
        style={{
          color: 'black',
        }}
        href="#">
          HOMME
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink 
        style={{
          color: 'black',
        }}
        href="#">
        ENFANT
        </NavLink>
      </NavItem>
      <InputGroup
      style={{
        width: '30%',
        marginLeft: 'auto'
      }}
      >
        <Input 
        style={{
          border : ' 1px solid black',
        }}
        />
        <Button>
          Rechercher
        </Button>
      </InputGroup>
      <NavItem
      style={{
        marginLeft: 'auto'
      }}
      >
        <NavLink href="#">
          <FontAwesomeIcon 
          style={{
            color: 'black',
            fontSize: '25px'
          }}
          icon={faCartArrowDown} 
          />
         {props.ajoutAuPanier}

        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">
        <FontAwesomeIcon 
          style={{
            color: 'black',
            fontSize: '25px'
          }}
          icon={faUser} />
        </NavLink>
      </NavItem>
    </Nav>
  </div>
  <div style={divstyle}>
    {chaussureList}
  </div>
</div>

 );

}
function mapStateToProps(state) {
  return { ajoutAuPanier: state.count }
 }
  
 export default connect(
  mapStateToProps,
  null
 )(NavBar);