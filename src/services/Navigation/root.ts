import { NavigationContainerRef } from '@react-navigation/native';
import * as React from 'react';

type Nav = {
  navigate: () => void;
};

export const navigationRef = React.createRef<NavigationContainerRef<Nav>>();

export function navigate(name: string, params?: object) {
  navigationRef.current?.navigate(name as any, params as any);
}
