import React from 'react';
import {SafeAreaView} from 'react-native';
import {Text} from './src/components/Text/Text';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <Text preset="headingLarge" bold>
        Coffstack
      </Text>
      <Text preset="headingMedium" italic>
        Coffstack
      </Text>
      <Text preset="headingSmall" semiBold>
        Coffstack
      </Text>
    </SafeAreaView>
  );
}

export default App;
