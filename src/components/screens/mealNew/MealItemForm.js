import React, { useState } from 'react';
import styled from 'styled-components';
import { View } from 'react-native';
import { Layout, Input, Select, SelectItem, Button } from '@ui-kitten/components';
// TODO - Check Keyboard events, find a better solution
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import AppTopBar from '../../common/AppTopBar';
import Title from '../../common/Title';
import { measures, foodCategories } from './../../../appdata/appdata';

const Form = styled(Layout)`
    flex: 1;
    padding: 16px;
    display: flex;
    justify-content: space-evenly;
`;

const Row = styled(View)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const HalfRow = styled(View)`
    width: 48%;
`;

const FormItem = styled(View)`
    margin: 8px 0;
`;

const MealItemForm = ({ navigation, onSave }) => {
    const [formValues, setFormValues] = useState({});
    const [measureIndex, setMeasureIndex] = useState(0);
    const [categoryIndex, setCategoryIndex] = useState();

    const navigateToMealNew = () => {
        navigation.navigate('MealNew');
    };

    return (
        <Form>
            <AppTopBar/>
            <KeyboardAwareScrollView>
                <Title>New Item</Title>
                <FormItem>
                    <Input
                        label='Food Name'
                        status='primary'
                        size='large'
                        value={formValues['foodName']}
                        onChangeText={value => setFormValues({ ...formValues, ['foodName']: value})}
                    />
                </FormItem>
                <Row>
                    <HalfRow>
                        <FormItem>
                            <Input
                                label={measures[measureIndex].name}
                                status='primary'
                                size='large'
                                keyboardType='decimal-pad'
                                value={formValues['carbs']}
                                onChangeText={value => setFormValues({ ...formValues, ['carbs']: value})}
                            />
                        </FormItem>
                    </HalfRow>
                    <HalfRow>
                        <FormItem>
                        <Select
                            label='Measure'
                            status='primary'
                            size='large'
                            value={measures[measureIndex].measure}
                            onSelect={({ row }) => setMeasureIndex(row)}
                        >
                            {measures.map((option, index) => <SelectItem key={index} title={option.measure}/>)}
                        </Select>
                        </FormItem>
                    </HalfRow>
                </Row>
                <Row>
                    <HalfRow>
                        <FormItem>
                            <Input
                                label='Carbohydrates (g)'
                                status='primary'
                                size='large'
                                keyboardType='decimal-pad'
                                value={formValues['carbs']}
                                onChangeText={value => setFormValues({ ...formValues, ['carbs']: value})}
                            />
                        </FormItem>
                    </HalfRow>
                    <HalfRow>
                        <FormItem>
                            <Input
                                label='...of which Sugars (g)'
                                status='primary'
                                size='large'
                                keyboardType='decimal-pad'
                                value={formValues['carbs']}
                                onChangeText={value => setFormValues({ ...formValues, ['carbs']: value})}
                            />
                        </FormItem>
                    </HalfRow>
                </Row>
                <FormItem>
                    <Input
                        label={`Default Portion (${measures[measureIndex].measure})`}
                        value={formValues['defaultPortion']}
                        onChangeText={value => setFormValues({ ...formValues, ['defaultPortion']: value})}
                    />
                </FormItem>
                <FormItem>
                    <Select
                        label='Category'
                        value={foodCategories[categoryIndex]?.name}
                        onSelect={({ row }) => setCategoryIndex(row)}
                    >
                        {foodCategories.map((option, index) => <SelectItem key={index} title={option.name}/>)}
                    </Select>
                </FormItem>
                <FormItem>
                    <Input
                        label='Tag'
                        value={formValues['tag']}
                        onChangeText={value => setFormValues({ ...formValues, ['tag']: value})}
                    />
                </FormItem>
            </KeyboardAwareScrollView>
            <Row>
                <HalfRow>
                    <Button status='info' appearance='outline' onPress={navigateToMealNew}>Close</Button>
                </HalfRow>
                <HalfRow>
                    <Button status='info' onPress={onSave}>Save</Button>
                </HalfRow>
            </Row>
        </Form>   
    );
};

export default MealItemForm;