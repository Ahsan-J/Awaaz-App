import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
  Text,
  View,
  processColor
} from 'react-native';
import f from './function.js'
import _ from 'lodash'
import styles from './style.js'
import { PieChart } from 'react-native-charts-wrapper'
import theme from '../../constant/theme.js';
import { moderateScale } from '../../helpers/sizeHelpers.js';

class AwaazPie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      legend: {
        enabled: true,
        textSize: moderateScale(12),
        form: 'CIRCLE',
        textColor: processColor(theme.fontPrimaryColor),
        horizontalAlignment: "LEFT",
        verticalAlignment: "CENTER",
        orientation: "VERTICAL",
        wordWrapEnabled: true
      },
      data: {
        dataSets: [{
          values: this.props.dataValues,
          label: '',
          config: {
            colors: [processColor('#C0FF8C'), processColor('#FFF78C'), processColor('#FFD08C'), processColor('#8CEAFF'), processColor('#FF8C9D')],
            valueTextSize: moderateScale(15),
            valueTextColor: processColor(theme.fontSecondaryColor),
            sliceSpace: 5,
            selectionShift: 13,
            // xValuePosition: "OUTSIDE_SLICE",
            // yValuePosition: "OUTSIDE_SLICE",
            // valueFormatter: "#.#'%'",
            valueFormatter: "#",
            valueLineColor: processColor('green'),
            valueLinePart1Length: 1
          }
        }],
      },
      highlights: [{ x: 2 }],
      description: {
        // text: 'This is Pie chart description',
        text: '',
        textSize: moderateScale(12),
        textColor: processColor('darkgray'),
      }
    }

    this.handleSelect = f.handleSelect.bind(this);
  }

  render() {
    if (!_.isUndefined(this.props.dataValues) && _.isArray(this.props.dataValues)) {
      return (
        <View style={styles.parentContainer}>
          <View style={styles.container}>
            <Text style={styles.title}>{this.props.title}</Text>
            <PieChart
              style={styles.chart}
              logEnabled={true}
              chartBackgroundColor={processColor(theme.secondaryColor)}
              chartDescription={this.state.description}
              data={this.state.data}
              legend={this.state.legend}
              highlights={this.state.highlights}

              // entryLabelColor={processColor(theme.fontSecondaryColor)}
              // entryLabelTextSize={moderateScale(12)}
              drawEntryLabels={false}

              rotationEnabled={true}
              rotationAngle={45}
              usePercentValues={false}
              // styledCenterText={{ text: 'Pie center text!', color: processColor('pink'), size: 20 }}
              // centerTextRadiusPercent={100}
              holeRadius={0}
              // holeColor={processColor('#f0f0f0')}
              transparentCircleRadius={0}
              // transparentCircleColor={processColor('#f0f0f088')}
              maxAngle={350}
            // onSelect={this.handleSelect}
            // onChange={(event) => console.log(event.nativeEvent)}
            />
          </View>

        </View>
      );
    }
    return null
  }
}

export default connect(f.mapStateToProps, f.mapDispatchToProps)(AwaazPie)