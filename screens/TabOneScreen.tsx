import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';
import styled from 'styled-components';
import { InputComponent as Input } from '../components/InputComponent';


export default function TabOneScreen() {
  const [value, setValue] = useState(0);
  const [lenght, setLenght]: any = useState(0);
  const [width, setWidth]: any = useState(0);
  const ValuePress = () => {
    const result = width * lenght;
    setValue(result);
  }
  return (
    <ScrollView style={{ backgroundColor: '#fff' }}>
      <View style={styles.ContainerView}>
        <View style={{ flex: 0.1, alignItems: 'center', paddingTop: 50 }}>
          <Text style={styles.Title}>Tính diện tích hình chữ nhật</Text>
        </View>
        <View style={{ flex: 0.6, paddingTop: 50, marginBottom: 40 }}>
          <Input title={'Nhập chiều dài'} value={lenght} onChangeValue={(text) => setLenght(text)} TestId={"lenght"}></Input>
          <Input title={'Nhập chiều rộng'} value={width} onChangeValue={(text) => setWidth(text)} TestId={"width"}></Input>
          <Text  style={styles.Title} >kết quả : </Text> 
          <Text testID="result" style={styles.Title} >{value}</Text> 
        </View>

        <View style={{ flex: 0.3, justifyContent: 'space-between', }}>
          <TouchableOpacity 
            onPress={ValuePress} 
            testID="perform"
            style={styles.TouchableButton}>
            <Text style={{ color: 'white' }}>Thực hiện </Text>
          </TouchableOpacity>

        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  ContainerView: {
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  TouchableButton: {
    height: 40,
    backgroundColor: 'palevioletred',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
  },
  Title: {
    fontSize:16,
    color: 'black',
    fontWeight: '400'
  },
});
