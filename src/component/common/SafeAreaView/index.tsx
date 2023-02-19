import React, {ReactNode} from 'react';
import {
  Edge,
  SafeAreaView as RNSafeAreaView,
} from 'react-native-safe-area-context';

interface SafeAreaViewProps {
  children: ReactNode;
  edges?: ReadonlyArray<Edge>;
}

function SafeAreaView({
  children,
  edges = ['bottom', 'left', 'right'],
}: SafeAreaViewProps) {
  const DefaultStyle = {
    flex: 1,
    backgroundColor: '#ffffff',
  };

  return (
    <RNSafeAreaView edges={edges} style={DefaultStyle}>
      {children}
    </RNSafeAreaView>
  );
}

export default SafeAreaView;
