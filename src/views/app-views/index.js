import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loading from 'components/shared-components/Loading';
import { APP_PREFIX_PATH } from 'configs/AppConfig'
import {EditClientProfile} from "./user-list/EditClientProfile";

export const AppViews = () => {
  return (
    <Suspense fallback={<Loading cover="content"/>}>
      <Switch>
        <Route exact path={`${APP_PREFIX_PATH}/home`} component={lazy(() => import(`./home`))} />
        <Route exact path={`${APP_PREFIX_PATH}/home/clients/list`} component={lazy(() => import(`./user-list`))} />
        <Route path={`${APP_PREFIX_PATH}/home/clients/list/:clientId`} component={EditClientProfile} />
        <Route exact path={`${APP_PREFIX_PATH}/home/dashboard`} component={lazy(() => import(`./dashboard`))} />
        <Redirect from={`${APP_PREFIX_PATH}`} to={`${APP_PREFIX_PATH}/home`} />
      </Switch>
    </Suspense>
  )
}

export default React.memo(AppViews);
