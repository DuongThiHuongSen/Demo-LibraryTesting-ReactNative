import { View, TextInput } from 'react-native';
import React from 'react';

interface props {
    title: string;
    value: number;
    onChangeValue: (xtext: string) => void;
    TestId: string;
}
export const InputComponent = (prop: props) => {
    return (
        <View style={{marginBottom:20}}>
            <TextInput
                style={{
                    borderWidth: 1, height: 40,
                    paddingHorizontal:15,
                    
                }}
                onChangeText={ text => {
                    prop.onChangeValue(text)
                }}
                value={prop.value.toString()}
                placeholder={prop.title}
                testID={`${prop.TestId}`}
                />
        </View>
    );
}

