import React from 'react';
import _ from 'lodash';
import styles from './style';
import {
  View
} from 'react-native';
import {
  Item,
  Label,
  Input,
  Picker,
  DatePicker,
  Icon as NBIcon,
  Text,
  Textarea
} from 'native-base';
import ReportStore from './store';
import { moderateScale } from '../../helpers/sizeHelpers';
import NumberSpinner from '../../components/numberSpinner/numberSpinner.js';


export default {

  /**********************LifeCycle Components in Order **********************************/

  componentDidMount: function () {

  },

  /***********************Additonal Functions to be used within component ***************/

  getVictimCount: function (victims) {
    this.setState({ victims });
  },

  onValueChange: function () {

  },

  renderVictimFields: function () {
    return _.map(_.range(0, this.state.victims), (index) => {
      return (
        <View key={index} style={{ minHeight: moderateScale(50), paddingTop: moderateScale(5), paddingBottom: moderateScale(5) }}>
          <Text style={styles.radioText}>{index + 1 + " )"}</Text>
          <Item stackedLabel last >
            <Label style={styles.label}>Name</Label>
            <Input style={styles.input} />
          </Item>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Item picker stackedLabel last style={[styles.item, { flex: 0.5 }]}>
              <Label style={styles.label}>Gender</Label>
              <View style={styles.input}>
                <Picker
                  mode="dropdown"
                  iosIcon={<NBIcon name="ios-arrow-down-outline" />}
                  style={{ color: '#ffffff' }}
                  placeholder="Gender"
                  placeholderStyle={{ color: "#ffffff" }}
                  placeholderIconColor="#ffffff"
                  selectedValue={this.state.gender}
                  onValueChange={this.onValueChange}
                >
                  <Picker.Item label="Male" value="key0" />
                  <Picker.Item label="Female" value="key1" />
                  <Picker.Item label="Others" value="key2" />
                </Picker>
              </View>
            </Item>
            <Item picker stackedLabel last style={[styles.item, { flex: 0.5 }]}>
              <Label style={styles.label}>Age</Label>
              <Input style={styles.input} />
            </Item>
          </View>
          <Item stackedLabel last >
            <Label style={styles.label}>Contact</Label>
            <Input style={styles.input} />
          </Item>
          <Item stackedLabel last >
            <Label style={styles.label}>Harasser relation to victim</Label>
            <Input style={styles.input} />
          </Item>
          {/* @@TODO : Change style notation to represent them as distinct entity - Ahsan */}
          <View style={styles.radioQuestionWrapper}>
            <Text style={[styles.radioText]}>Frequency of Harassment</Text>
            <NumberSpinner step={1} onChange={()=> {}}/>
          </View>
          <Textarea rowSpan={5} bordered placeholder="About the Harasser" />
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