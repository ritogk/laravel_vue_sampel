import { InjectionKey, reactive, readonly, ToRefs, toRefs } from 'vue';
import { apiConfig } from '@/libs/config';
import { User, AuthFrontApi, AuthFrontLoginPostRequest } from '@/open_api';

// メイン関数のtype
type useAuthenticationType = {
  state: ToRefs<{ member: User }>;
  login(email: string, password: string): Promise<void>;
};

const authFrontApi = new AuthFrontApi(apiConfig);

// メイン関数
const useAuthentication = (): useAuthenticationType => {
  // 状態
  const state = reactive({ member: {} as User });
  // ログイン処理
  const login = async (email: string, password: string): Promise<void> => {
    const request: AuthFrontLoginPostRequest = {
      requestLogin: { email: email, password: password },
    };
    await authFrontApi.authFrontLoginPost(request);
  };
  return { state: toRefs(state), login: readonly(login) };
};

const injectionKey: InjectionKey<useAuthenticationType> = Symbol('Auth');
export { useAuthentication, useAuthenticationType, injectionKey };
