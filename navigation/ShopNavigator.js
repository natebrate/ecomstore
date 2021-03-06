import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {Platform} from 'react-native';

import CategoryOverviewScreen from '../screens/shop/CategoryOverviewScreen';
import CheckoutScreen from '../screens/shop/CheckoutScreen'
import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import ProductsDetailsScreen from '../screens/shop/ProductDetailsScreen';
import ProductListScreen from '../screens/store/ProductListScreen';
import CartScreen from "../screens/shop/CartScreen";

import HeaderComponent from '../components/header.component';
import Colors from '../constants/Colors';

const screens = {
  CategoryOverview: {
    screen: CategoryOverviewScreen,
    navigationOptions: ({navigation}) => {
      return {
        headerTitle: () => <HeaderComponent navigation={navigation} />,
      };
    },
  },
  ProductsOverview: {
    screen: ProductsOverviewScreen,
    navigationOptions: {
      title: 'PRODUCT OVERVIEW',
    },
  },
  Cart: {
    screen: CartScreen,
    navigationOptions: {
      title: 'CART',
    }
  },
  ProductsDetails: {
    screen: ProductsDetailsScreen,
    navigationOptions: {
      title: 'PRODUCT DETAILS',
    },
  },
  ProductList: {
    screen: ProductListScreen,
    navigationOptions: {
      title: 'PRODUCT LIST',
    },
  },
  Checkout: {
    screen: CheckoutScreen,
    navigation: {
      title: 'CHECKOUT',
    }
  }
};
const ShopNavigator = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? Colors.accent : '',
      height: 45,
    },
    headerTitleStyle: 'OpenSansExtraBold',
    headerBackTitleStyle: {
      fontFamily: 'OpenSansExtraBold',
    },
    headerTintColor: Platform.OS === 'android' ? 'black' : Colors.primary,
  },
});

export default ShopNavigator;
