import styled from 'styled-components';
import { useEffect, useState } from 'react';

const LoadDiv = styled.div`
  padding: 36px;
`

export const withLoading = (WrappedComponent, fetchData) => {
  return () => {
    const [data, setData] = useState(null);

    // mount時のみfetch
    useEffect(() => {
      fetch();
    }, [])

    // データロードメソッド
    const fetch = async ()  => {
      const data = await fetchData();
      setData(data);
    }

    const Loading = (
      <LoadDiv>ロード中...</LoadDiv>
    )

    // dataがなければロード中を表示
    return data ? <WrappedComponent data={data} /> : Loading;
  }
}
