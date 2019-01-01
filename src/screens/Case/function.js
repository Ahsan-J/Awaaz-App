import React from 'react'
import _ from 'lodash'
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native'
import MyCasesStore from './store';
import Collapsible from 'react-native-collapsible';
import styles from './style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default {

  /**********************LifeCycle Components in Order **********************************/

  componentDidMount: function () {

  },

  /***********************Additonal Functions to be used within component ***************/
  getReportData: function () {
    return {
      "The Report": this.renderReport,
      "About the harasser": this.renderHarasser,
      "Victims": this.renderVictims,
      "Witnesses": this.renderWitnesses,
      "About the Progress": this.renderProgress,
      "Authorities Involved": this.renderInvolvedAuthorites,
      "Evidences": this.renderEvidences,
    }
  },

  toggleCollapse: function (headingText) {
    let temp = this.state.collapsed;
    if (_.isUndefined(temp[headingText])) {
      temp[headingText] = false;
    } else {
      temp[headingText] = !temp[headingText];
    }
    console.log(temp, headingText)

    this.setState({
      collapsed: temp
    })
  },

  renderReport: function (headingText) {
    return (
      <Collapsible collapsed={this.state.collapsed[headingText]} style={{ backgroundColor: '#fff' }}>
        <View style={styles.reportContainer}>
          <Text style={styles.headingTexts}>Description:</Text>
          <Text>The Description of the Report The Description of the Report The Description of the Report The Description of the Report The Description of the Report The Description of the Report</Text>
          <View style={styles.item}>
            <Text style={styles.headingTexts}>case id</Text>
            <Text style={styles.itemValueText}>asdsa</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.headingTexts}>Location</Text>
            <Text style={styles.itemValueText}>asdsa</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.headingTexts}>Time</Text>
            <Text style={styles.itemValueText}>asdsa</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.headingTexts}>City</Text>
            <Text style={styles.itemValueText}>asdsa</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.headingTexts}>Type</Text>
            <Text style={styles.itemValueText}>asdsa</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.headingTexts}>Active Status</Text>
            <Text style={styles.itemValueText}>asdsa</Text>
          </View>
        </View>
      </Collapsible>
    )
  },

  renderHarasser: function (headingText) {
    return (
      <Collapsible collapsed={this.state.collapsed[headingText]} style={{ backgroundColor: '#fff' }}>
        <View style={styles.harasserContainer}>
          <View style={[styles.item, { paddingTop: 0 }]}>
            <Text style={styles.headingTexts}>Name</Text>
            <Text style={styles.itemValueText}>asdsa</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.headingTexts}>Gender</Text>
            <Text style={styles.itemValueText}>asdsa</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.headingTexts}>Age Group</Text>
            <Text style={styles.itemValueText}>asdsa</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.headingTexts}>Relation</Text>
            <Text style={styles.itemValueText}>asdsa</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.headingTexts}>Frequency</Text>
            <Text style={styles.itemValueText}>asdsa</Text>
          </View>
          <Text style={[styles.item, styles.headingTexts]}>About the Harasser:</Text>
          <Text>The Description of the Report The Description of the Report The Description of the Report The Description of the Report The Description of the Report The Description of the Report</Text>
        </View>
      </Collapsible>
    )
  },

  renderVictims: function (headingText) {
    return (
      <Collapsible collapsed={this.state.collapsed[headingText]} style={{ backgroundColor: '#fff' }}>
        <View style={styles.victimsContainer}>
          <View style={[styles.item, { paddingTop: 0 }]}>
            <Text style={styles.headingTexts}>Name</Text>
            <Text style={styles.itemValueText}>asdsa</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.headingTexts}>Gender</Text>
            <Text style={styles.itemValueText}>asdsa</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.headingTexts}>Age Group</Text>
            <Text style={styles.itemValueText}>asdsa</Text>
          </View>
          {/* <View style={styles.item}>
            <Text style={styles.headingTexts}>Contact</Text>
            <Text style={styles.itemValueText}>asdsa</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.headingTexts}>Address</Text>
            <Text style={styles.itemValueText}>asdsa</Text>
          </View> */}
        </View>
      </Collapsible>
    )
  },

  renderWitnesses: function (headingText) {
    return (
      <Collapsible collapsed={this.state.collapsed[headingText]} style={{ backgroundColor: '#fff' }}>
        <View style={styles.victimsContainer}>
          <View style={[styles.item, { paddingTop: 0 }]}>
            <Text style={styles.headingTexts}>Name</Text>
            <Text style={styles.itemValueText}>asdsa</Text>
          </View>
          {/* <View style={styles.item}>
            <Text style={styles.headingTexts}>Gender</Text>
            <Text style={styles.itemValueText}>asdsa</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.headingTexts}>Age Group</Text>
            <Text style={styles.itemValueText}>asdsa</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.headingTexts}>Contact</Text>
            <Text style={styles.itemValueText}>asdsa</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.headingTexts}>Address</Text>
            <Text style={styles.itemValueText}>asdsa</Text>
          </View> */}
          <Text style={[styles.item, styles.headingTexts]}>Witness Statement:</Text>
          <Text>The Description of the Report The Description of the Report The Description of the Report The Description of the Report The Description of the Report The Description of the Report</Text>
        </View>
      </Collapsible>
    )
  },

  renderProgress: function (headingText) {
    return (
      <Collapsible collapsed={this.state.collapsed[headingText]} style={{ backgroundColor: '#fff' }}>
        <View style={styles.harasserContainer}>
          <View style={[styles.item, { paddingTop: 0 }]}>
            <Text style={styles.headingTexts}>Date</Text>
            <Text style={styles.itemValueText}>asdsa</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.headingTexts}>Status</Text>
            <Text style={styles.itemValueText}>asdsa</Text>
          </View>
          <Text style={[styles.item, styles.headingTexts]}>Progress:</Text>
          <Text>The Description of the Report The Description of the Report The Description of the Report The Description of the Report The Description of the Report The Description of the Report</Text>
        </View>
      </Collapsible>
    )
  },

  renderInvolvedAuthorites : function(headingText) {
    return (
      <Collapsible collapsed={this.state.collapsed[headingText]} style={{ backgroundColor: '#fff' }}>
        <View style={styles.harasserContainer}>
          <View style={[styles.item, { paddingTop: 0 }]}>
            <Text style={styles.headingTexts}>Authority 01</Text>
            <Text style={styles.itemValueText}>status</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.headingTexts}>Authority 02</Text>
            <Text style={styles.itemValueText}>status</Text>
          </View>
        </View>
      </Collapsible>
    )
  },

  renderEvidences : function (headingText) {
    return (
      <Collapsible collapsed={this.state.collapsed[headingText]} style={{ backgroundColor: '#fff' }}>
        <View style={styles.harasserContainer}>
          <View style={[styles.item, { paddingTop: 0 }]}>
            <Text style={styles.headingTexts}>Filename</Text>
            <Text style={styles.itemValueText}>type/size</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.headingTexts}>Filename</Text>
            <Text style={styles.itemValueText}>type/size</Text>
          </View>
        </View>
      </Collapsible>
    )
  },
  
  renderCollapsibleReport: function () {
    return _.map(this.getReportData(), (action, headingText) => {
      return (
        <View key={headingText}>
          <TouchableOpacity style={styles.collapsibleHeading} onPress={() => this.toggleCollapse(headingText)}>
            <Text style={styles.collapsibleHeadingText}>{headingText}</Text>
            <Icon name={_.isUndefined(this.state.collapsed) || this.state.collapsed[headingText] == false ? "chevron-up" : "chevron-down"} style={styles.collapsibleHeaderIcon} />
          </TouchableOpacity>
          {action(headingText)}
        </View>
      )
    })
  },

  /**********************Connecting and defining the Redux ******************************/
  mapStateToProps: function (state) {
    return {

    }
  },

  mapDispatchToProps: function (dispatch) {
    return {

    }
  },
}

// Local functions limitng to only this component