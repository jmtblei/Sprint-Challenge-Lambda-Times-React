import React from 'react';
import Tab from './Tab';
import PropTypes from "prop-types";
import styled from 'styled-components';

const TabsTabs = styled.div`
  border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 47px;
  background-color: #fff;
  @media (min-width: 1280px) {
    width: 1280px;
}
`;

const TabsTopics = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
`;

const TabsTitle = styled.span`
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
`;

const Tabs = props => {
  return (
    <TabsTabs>
      <TabsTopics>
        <TabsTitle>TRENDING TOPICS:</TabsTitle>
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
            {props.tabs.map((t, index)  => (
            <Tab key={index} 
            tab={t} 
            selectTabHandler={props.changeSelected} 
            selectedTab={props.selectedTab} 
            />
          ))}
      </TabsTopics>
    </TabsTabs>
  );
};

// Make sure to use PropTypes to validate your types!
Tab.propTypes = {
  tab: PropTypes.string
}

export default Tabs;
