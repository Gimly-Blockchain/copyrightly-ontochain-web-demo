// noinspection JSUnusedGlobalSymbols
export class QRVariables {
  redirectUrl?: string
  requestorDID?: string
}

export class StateMapping {
  redirectUrl?: string
  stateId?: string
  requestorDID?: string
  sessionId?:string
  pollCount?: number
  authRequestCreated: boolean = false
  authResponse? :AuthResponse
}


export class AuthResponse {
  constructor(userDID: string) {
    this.userDID = userDID;
  }
  userDID: string
  firstName?: string
  lastName?: string
  youtubeChannelName?: string
  youtubeChannelId?: string
  youtubeChannelURL?: string
  youtubeChannelCreationDate?: number
  token?: string
}
