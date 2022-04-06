const Routes = {
  apiSendBlogFormPath: (): string => {
    console.log(process.env.NODE_ENV);
    if (process.env.NODE_ENV === 'development') return 'blogDataDev';
    return 'blogData';
  },
  apiGetBlogDataPath: (): string => {
    if (process.env.NODE_ENV === 'development') return 'blogDataDev';
    return 'blogData';
  },
};

export default Routes;
