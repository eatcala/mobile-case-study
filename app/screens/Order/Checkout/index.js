import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator, Dimensions, StatusBar, StyleSheet, View } from 'react-native';
import { useQuery } from '@apollo/client';
import dayjs from 'dayjs';

import GET_ROBOT_CONFIG from '../../../graphql/queries/robot';

import { getOrderPrice } from '../../../../src/utils/orderPrice';
import { useUserState } from '../../../context';

import BackNavigation from '../../../components/UI/BackNavigation';
import RegularButton from '../../../components/UI/RegularButton';
import DishList from '../../../components/Order/Checkout/DishList';
import AppLoading from '../../../components/UI/AppLoading';

import Moon from '../../../../src/img/moon.svg';
import Locker from '../../../../src/img/locker.svg';
import Clock from '../../../../src/img/clock.svg';

import theme from '../../../../src/styles';

import {
  Border,
  ButtonSlot,
  ButtonView,
  MainView,
  TextSlot,
  Title,
  TitleAndSlot,
} from '../../../components/Order/Checkout/styles';

const styles = StyleSheet.create({
  icon: {
    width: 15,
    height: 15,
  },
  bugFix: {
    zIndex: 100,
  },
});

const Checkout = ({ navigation }) => {
  const dim = Dimensions.get('window');
  const { cards, card, slot, order, user, isUserNew, bootSplashIsVisible } = useUserState();

  const [isPickupModalOpen, setIsPickupModalOpen] = useState(false);
  const [serviceHours, setServiceHours] = useState(null);
  const [maintenance, setMaintenance] = useState(false);

  const { loading: robotConfigLoading } = useQuery(GET_ROBOT_CONFIG, {
    fetchPolicy: 'network-only',
    onCompleted({ robotConfig: { serviceStart, serviceEnd, maintenance: robotMaintenance } }) {
      setMaintenance(robotMaintenance);
      setServiceHours({
        start: dayjs(parseInt(serviceStart, 10)),
        end: dayjs(parseInt(serviceEnd, 10)),
      });
    },
    onError(err) {
      console.log('GET_STATUS_ROBOT error', err);
    },
  });

  const getPickupRecap = () => {
    const now = dayjs().valueOf();
    if (robotConfigLoading || serviceHours === null) {
      return <ActivityIndicator size="small" color={theme.colors.yellow} />;
    } else if (serviceHours !== null) {
      if (!serviceHours.start) {
        return [<Locker key="icon" style={styles.icon} />, <TextSlot key="text">Fermé</TextSlot>];
      } else {
        const start = dayjs(serviceHours.start).valueOf();
        const end = dayjs(serviceHours.end).valueOf();
        console.log('start', start)
        console.log('now', now)
        console.log('end', end)

        if (maintenance) {
          return [
            <Moon key="icon" style={styles.icon} />,
            <TextSlot key="text">En pause</TextSlot>,
          ];
        }
        if (start < now && end > now) {
          return [
            <Clock key="icon" style={styles.icon} />,
            <TextSlot key="text"> {slot ? dayjs(parseInt(slot.start, 10)).format('HH:mm') : 'X:XX'} </TextSlot>,
          ];
        }
        if (end < now) {
          return [<Locker key="icon" style={styles.icon} />, <TextSlot key="text">Fermé</TextSlot>];
        }
        if (start > now) {
          return [
            <Clock key="icon" style={styles.icon} />,
            <TextSlot key="text">{`Ouvre à ${dayjs(parseInt(start, 10)).format(
              'HH:mm'
            )}`}</TextSlot>,
          ];
        }
        if (!slot) {
          return [<Locker key="icon" style={styles.icon} />, <TextSlot key="text">Fermé</TextSlot>];
        }
        return <ActivityIndicator size="small" color={theme.colors.yellow} />;
      }
    }
  };

  const openModal = () => {
    setIsPickupModalOpen(true);
  };

  const getButtonText = () => {
    const orderPrice = getOrderPrice(order, isUserNew ? 6 : 0);
    return user ? `Payez ${orderPrice} €` : 'FINALISER';
  };

  if (bootSplashIsVisible || serviceHours === null) {
    return <AppLoading loading={robotConfigLoading} />;
  }

  return (
    <MainView>
      <StatusBar translucent={true} backgroundColor="transparent" barStyle="light-content" />
      <BackNavigation
        color="white"
        direction="bottom"
        onPress={() => navigation.navigate('MenuSelection')}
      />
      <TitleAndSlot noPaddingBottom={card && cards}>
        <View>
          <Title>Mon panier</Title>
        </View>
        <ButtonSlot onPress={() => openModal()}>{getPickupRecap()}</ButtonSlot>
      </TitleAndSlot>
      <Border width={dim.width} style={styles.bugFix} />
      <DishList order={order} navigation={navigation} />
      <Border width={dim.width} style={styles.bugFix} />
      <ButtonView>
        <RegularButton
          text={getButtonText()}
          textColor={theme.colors.black}
          color={theme.colors.yellow}
          onPress={() => console.log('order creation')}
          disable={true}
        />
      </ButtonView>
    </MainView>
  );
};

Checkout.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    getParam: PropTypes.func,
  }).isRequired,
};

export default Checkout;
