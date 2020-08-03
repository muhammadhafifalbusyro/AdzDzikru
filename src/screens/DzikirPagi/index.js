import React from 'react';
import {View, Text, Switch, ScrollView, StyleSheet} from 'react-native';
import {DzikirPagiContent} from '../../assets/data/DzikirPagi';
import {connect} from 'react-redux';
import {
  modeChange,
  backgroundLafaldzGanjilChange,
  backgroundLafaldzGenapChange,
  textLafaldzChange,
} from '../../redux/actions/index';
import StatusBarCustom from '../../components/statusbar';

class DzikirPagi extends React.Component {
  state = {
    data: DzikirPagiContent,
  };
  componentDidMount() {
    this.props.modeChange(false);
    this.props.backgroundLafaldzGanjilChange('rgba(255, 255, 153,0.3)');
    this.props.backgroundLafaldzGenapChange('white');
    this.props.textLafaldzChange('rgba(0,0,0,0.5)');
  }
  changeMode = () => {
    if (this.props.mode) {
      this.props.modeChange(!this.props.mode);
      this.props.backgroundLafaldzGanjilChange('rgba(255, 255, 153,0.3)');
      this.props.backgroundLafaldzGenapChange('white');
      this.props.textLafaldzChange('rgba(0,0,0,0.5)');
    } else {
      this.props.modeChange(!this.props.mode);
      this.props.backgroundLafaldzGanjilChange('black');
      this.props.backgroundLafaldzGenapChange('rgba(0,0,0,0.8)');
      this.props.textLafaldzChange('white');
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <StatusBarCustom />
        <Switch
          trackColor={{false: 'rgba(255,255,255,0.5)', true: 'grey'}}
          thumbColor={this.props.mode ? '#f4f3f4' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => this.changeMode()}
          value={this.props.mode}
          style={styles.switch}
        />
        <View style={styles.safeArea}>
          <View style={styles.navbar}>
            <Text style={styles.textNavbar}>Dzikir Pagi</Text>
          </View>
          <ScrollView style={{flex: 1}}>
            {this.state.data.map((value, key) => {
              let count = key + 1;
              if (count % 2 != 0) {
                return (
                  <View
                    style={{
                      ...styles.contentWrapper,
                      backgroundColor: this.props.backgroundLafaldzGanjil,
                    }}
                    key={key}>
                    <View style={styles.textWrapper}>
                      <Text
                        style={{
                          ...styles.textLafaldz,
                          color: this.props.textLafaldz,
                        }}>
                        {value.lafaldz}
                      </Text>
                    </View>
                    <View style={styles.textWrapper}>
                      <Text
                        style={{
                          ...styles.textLafaldz2,
                          color: this.props.textLafaldz,
                        }}>
                        {value.terjemahan}
                      </Text>
                    </View>
                  </View>
                );
              } else {
                return (
                  <View
                    style={{
                      ...styles.contentWrapper,
                      backgroundColor: this.props.backgroundLafaldzGenap,
                    }}
                    key={key}>
                    <View style={styles.textWrapper}>
                      <Text
                        style={{
                          ...styles.textLafaldz,
                          color: this.props.textLafaldz,
                        }}>
                        {value.lafaldz}
                      </Text>
                    </View>
                    <View style={styles.textWrapper}>
                      <Text
                        style={{
                          ...styles.textLafaldz2,
                          color: this.props.textLafaldz,
                        }}>
                        {value.terjemahan}
                      </Text>
                    </View>
                  </View>
                );
              }
            })}
          </ScrollView>
        </View>
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  const {
    mode,
    backgroundLafaldzGanjil,
    backgroundLafaldzGenap,
    textLafaldz,
  } = state.reducers;
  return {mode, backgroundLafaldzGanjil, backgroundLafaldzGenap, textLafaldz};
};
export default connect(mapStateToProps, {
  modeChange,
  backgroundLafaldzGanjilChange,
  backgroundLafaldzGenapChange,
  textLafaldzChange,
})(DzikirPagi);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  switch: {
    position: 'absolute',
    top: 12,
    right: 5,
    zIndex: 1,
  },
  safeArea: {
    flex: 1,
    zIndex: 0,
  },
  navbar: {
    height: 50,
    width: '100%',
    backgroundColor: 'teal',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  textNavbar: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  contentWrapper: {
    width: '100%',
  },
  textWrapper: {
    padding: 10,
  },
  textLafaldz: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  textLafaldz2: {
    fontSize: 16,
  },
});
