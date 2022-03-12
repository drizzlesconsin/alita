import React from 'react';

/**
 * alita page
 *
 * ```typescript
 * <Page>
 *   <Header></Header>
 *   <Content></Content>
 *   <Footer></Footer>
 * </Page>
 * ```
 */
const Page: React.FC = ({ children }) => {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        overflow: 'hidden',
        contain: 'layout size style',
      }}
    >
      {children}
    </div>
  );
};

export default Page;
