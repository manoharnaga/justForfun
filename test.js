import React, { useState } from "react";
import { View, Text, Pressable } from 'react-native';
import Draggable from 'react-draggable';
import ColorPicker from 'react-native-color-picker';
import Slider from '@react-native-community/slider';

const TextBox = ({ onDelete }) => {
    const [text, setText] = useState('Hello World!');
    const [color, setColor] = useState('#000');
    const [fontSize, setFontSize] = useState(16);
    const [rotate, setRotate] = useState(0);

    return (
        <Draggable>
            <View style={{ boxShadow: '2px 2px 5px #999', padding: 10, borderRadius: 5 }}>
                <ColorPicker
                    oldColor={color}
                    onColorChange={(color) => setColor(color)}
                    style={{ height: 200 }}
                />
                <Slider
                    style={{ width: 200, height: 40 }}
                    minimumValue={10}
                    maximumValue={50}
                    minimumTrackTintColor="#FFFFFF"
                    maximumTrackTintColor="#000000"
                    thumbTintColor="#FFFFFF"
                    onValueChange={(value) => setFontSize(value)}
                />
                <Pressable
                    style={{
                        backgroundColor: '#2196F3',
                        padding: 10,
                        borderRadius: 5,
                        margin: 10,
                    }}
                    onPress={() => setRotate(rotate + 45)}
                >
                    <Text style={{ color: '#FFFFFF', fontSize: fontSize, transform: [{ rotate: `${rotate}deg` }] }}>{text}</Text>
                </Pressable>
                <Pressable
                    style={{
                        backgroundColor: '#FF0000',
                        padding: 10,
                        borderRadius: 5,
                        margin: 10,
                    }}
                    onPress={onDelete}
                >
                    <Text style={{ color: '#FFFFFF' }}>Delete</Text>
                </Pressable>
            </View>
        </Draggable>
    );
};

export default TextBox;
