import NetInfo from '@react-native-community/netinfo';
import { useEffect, useState } from 'react';

export function useConnectivity() {
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    const subscription = NetInfo.addEventListener((state) => {
      setIsConnected(Boolean(state.isConnected && state.isInternetReachable !== false));
    });

    return () => {
      subscription();
    };
  }, []);

  return {
    isConnected,
    isOffline: !isConnected,
  };
}
