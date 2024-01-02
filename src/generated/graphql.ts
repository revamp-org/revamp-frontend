import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  AccountNumber: { input: any; output: any; }
  BigInt: { input: any; output: any; }
  Byte: { input: any; output: any; }
  CountryCode: { input: any; output: any; }
  Cuid: { input: any; output: any; }
  Currency: { input: any; output: any; }
  DID: { input: any; output: any; }
  Date: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  DateTimeISO: { input: any; output: any; }
  DeweyDecimal: { input: any; output: any; }
  Duration: { input: any; output: any; }
  EmailAddress: { input: any; output: any; }
  GUID: { input: any; output: any; }
  HSL: { input: any; output: any; }
  HSLA: { input: any; output: any; }
  HexColorCode: { input: any; output: any; }
  Hexadecimal: { input: any; output: any; }
  IBAN: { input: any; output: any; }
  IP: { input: any; output: any; }
  IPCPatent: { input: any; output: any; }
  IPv4: { input: any; output: any; }
  IPv6: { input: any; output: any; }
  ISBN: { input: any; output: any; }
  ISO8601Duration: { input: any; output: any; }
  JSON: { input: any; output: any; }
  JSONObject: { input: any; output: any; }
  JWT: { input: any; output: any; }
  LCCSubclass: { input: any; output: any; }
  Latitude: { input: any; output: any; }
  LocalDate: { input: any; output: any; }
  LocalDateTime: { input: any; output: any; }
  LocalEndTime: { input: any; output: any; }
  LocalTime: { input: any; output: any; }
  Locale: { input: any; output: any; }
  Long: { input: any; output: any; }
  Longitude: { input: any; output: any; }
  MAC: { input: any; output: any; }
  NegativeFloat: { input: any; output: any; }
  NegativeInt: { input: any; output: any; }
  NonEmptyString: { input: any; output: any; }
  NonNegativeFloat: { input: any; output: any; }
  NonNegativeInt: { input: any; output: any; }
  NonPositiveFloat: { input: any; output: any; }
  NonPositiveInt: { input: any; output: any; }
  ObjectID: { input: any; output: any; }
  PhoneNumber: { input: any; output: any; }
  Port: { input: any; output: any; }
  PositiveFloat: { input: any; output: any; }
  PositiveInt: { input: any; output: any; }
  PostalCode: { input: any; output: any; }
  RGB: { input: any; output: any; }
  RGBA: { input: any; output: any; }
  RoutingNumber: { input: any; output: any; }
  SafeInt: { input: any; output: any; }
  SemVer: { input: any; output: any; }
  Time: { input: any; output: any; }
  TimeZone: { input: any; output: any; }
  Timestamp: { input: any; output: any; }
  URL: { input: any; output: any; }
  USCurrency: { input: any; output: any; }
  UUID: { input: any; output: any; }
  UnsignedFloat: { input: any; output: any; }
  UnsignedInt: { input: any; output: any; }
  UtcOffset: { input: any; output: any; }
  Void: { input: any; output: any; }
};

export type Aspect = {
  __typename?: 'Aspect';
  aspect: Scalars['String']['output'];
  aspectId: Scalars['Int']['output'];
  tags: Array<Tag>;
};

export type Comment = {
  __typename?: 'Comment';
  author: UserWithLessDetails;
  comment: Scalars['String']['output'];
  commentId: Scalars['Int']['output'];
  createdAt: Scalars['Timestamp']['output'];
  updatedAt?: Maybe<Scalars['Timestamp']['output']>;
};

export type Community = {
  __typename?: 'Community';
  community: Scalars['String']['output'];
  communityId: Scalars['Int']['output'];
  createdAt: Scalars['Timestamp']['output'];
  description: Scalars['String']['output'];
  goals: Array<Goal>;
  journals: Array<Journal>;
  nametag: Scalars['String']['output'];
  privacy: Scalars['String']['output'];
  updatedAt: Scalars['Timestamp']['output'];
  users: Array<Maybe<UserWithRole>>;
};

export type CommunityWithLessDetails = {
  __typename?: 'CommunityWithLessDetails';
  community: Scalars['String']['output'];
  communityId: Scalars['Int']['output'];
  createdAt: Scalars['Timestamp']['output'];
  description: Scalars['String']['output'];
  nametag: Scalars['String']['output'];
  privacy: Scalars['String']['output'];
  updatedAt: Scalars['Timestamp']['output'];
};

export type CountResult = {
  __typename?: 'CountResult';
  count: Scalars['Float']['output'];
  date: Scalars['Timestamp']['output'];
};

export type CreateCommunityInput = {
  description: Scalars['String']['input'];
  members: Array<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
  nametag: Scalars['String']['input'];
  privacy?: InputMaybe<Scalars['String']['input']>;
};

export type EditCommunityInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  privacy?: InputMaybe<Scalars['String']['input']>;
};

export type Goal = {
  __typename?: 'Goal';
  createdAt: Scalars['Timestamp']['output'];
  createdBy: UserWithLessDetails;
  deadline?: Maybe<Scalars['Timestamp']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  goalId: Scalars['Int']['output'];
  goalQnas?: Maybe<Array<Maybe<GoalQna>>>;
  isActive: Scalars['Boolean']['output'];
  isDone: Scalars['Boolean']['output'];
  likedBy: Array<Like>;
  order: Scalars['Int']['output'];
  priority?: Maybe<Scalars['String']['output']>;
  relatedArea?: Maybe<Scalars['String']['output']>;
  sharedBy: Array<Share>;
  streak: Scalars['Int']['output'];
  tasks: Array<Task>;
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['Timestamp']['output']>;
};

export type GoalQna = {
  __typename?: 'GoalQna';
  answer: Scalars['String']['output'];
  goalQnaId: Scalars['Int']['output'];
  question: Scalars['String']['output'];
};

export type Journal = {
  __typename?: 'Journal';
  access: Scalars['String']['output'];
  comments: Array<Comment>;
  content: Scalars['String']['output'];
  createdBy: UserWithLessDetails;
  date: Scalars['Timestamp']['output'];
  journalId: Scalars['Int']['output'];
  likedBy: Array<Like>;
  sharedBy: Array<Share>;
  title: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type Like = {
  __typename?: 'Like';
  likedAt: Scalars['Timestamp']['output'];
  likedBy: UserWithLessDetails;
};

export type Milestone = {
  __typename?: 'Milestone';
  createdAt: Scalars['Timestamp']['output'];
  milestone: Scalars['String']['output'];
  milestoneId: Scalars['Int']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  acceptCommunityInvite: Scalars['String']['output'];
  addUserToCommunity: Scalars['String']['output'];
  blockUserFromCommunity: Scalars['String']['output'];
  createCommunity: Scalars['String']['output'];
  declineCommunityInvite: Scalars['String']['output'];
  deleteGoal: Scalars['String']['output'];
  deleteTask: Scalars['String']['output'];
  deleteTodo: Scalars['String']['output'];
  deleteUser: Scalars['String']['output'];
  editCommunity: Scalars['String']['output'];
  editGoal: Scalars['String']['output'];
  editTask: Scalars['String']['output'];
  editTodo: Scalars['String']['output'];
  enterInCommunity: Scalars['String']['output'];
  inviteUserToCommunity: Scalars['String']['output'];
  leaveCommunity: Scalars['String']['output'];
  likeGoal: Scalars['Boolean']['output'];
  likeJournal: Scalars['Boolean']['output'];
  makeUserAdminOfCommunity: Scalars['String']['output'];
  publishGoal: Scalars['String']['output'];
  publishJournal: Scalars['String']['output'];
  removeUserFromCommunity: Scalars['String']['output'];
  setGoal: Scalars['String']['output'];
  setTask: Scalars['String']['output'];
  setTodo: Scalars['String']['output'];
  setUser: Scalars['String']['output'];
  shareGoal: Scalars['String']['output'];
  shareJournal: Scalars['String']['output'];
  unBlockUserFromCommunity: Scalars['String']['output'];
  updateJournal: Scalars['String']['output'];
};


export type MutationAcceptCommunityInviteArgs = {
  communityId: Scalars['Int']['input'];
};


export type MutationAddUserToCommunityArgs = {
  communityId: Scalars['Int']['input'];
  username: Scalars['String']['input'];
};


export type MutationBlockUserFromCommunityArgs = {
  communityId: Scalars['Int']['input'];
  username: Scalars['String']['input'];
};


export type MutationCreateCommunityArgs = {
  input: CreateCommunityInput;
};


export type MutationDeclineCommunityInviteArgs = {
  communityId: Scalars['Int']['input'];
};


export type MutationDeleteGoalArgs = {
  goalId: Scalars['Int']['input'];
};


export type MutationDeleteTaskArgs = {
  taskId: Scalars['Int']['input'];
};


export type MutationDeleteTodoArgs = {
  todoId: Scalars['Int']['input'];
};


export type MutationDeleteUserArgs = {
  userId: Scalars['ID']['input'];
};


export type MutationEditCommunityArgs = {
  communityId: Scalars['Int']['input'];
  input: EditCommunityInput;
};


export type MutationEditGoalArgs = {
  deadline?: InputMaybe<Scalars['Timestamp']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  goalId: Scalars['Int']['input'];
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isDone?: InputMaybe<Scalars['Boolean']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  priority?: InputMaybe<Scalars['String']['input']>;
  relatedArea?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};


export type MutationEditTaskArgs = {
  deadline?: InputMaybe<Scalars['Timestamp']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  isDone?: InputMaybe<Scalars['Boolean']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  priority?: InputMaybe<Scalars['String']['input']>;
  streak?: InputMaybe<Scalars['Int']['input']>;
  taskId: Scalars['Int']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
};


export type MutationEditTodoArgs = {
  isDone?: InputMaybe<Scalars['Boolean']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  todo?: InputMaybe<Scalars['String']['input']>;
  todoId: Scalars['Int']['input'];
};


export type MutationEnterInCommunityArgs = {
  communityId: Scalars['Int']['input'];
};


export type MutationInviteUserToCommunityArgs = {
  communityId: Scalars['Int']['input'];
  username: Scalars['String']['input'];
};


export type MutationLeaveCommunityArgs = {
  communityId: Scalars['Int']['input'];
};


export type MutationLikeGoalArgs = {
  goalId: Scalars['Int']['input'];
};


export type MutationLikeJournalArgs = {
  journalId: Scalars['Int']['input'];
};


export type MutationMakeUserAdminOfCommunityArgs = {
  communityId: Scalars['Int']['input'];
  username: Scalars['String']['input'];
};


export type MutationPublishGoalArgs = {
  goalId: Scalars['Int']['input'];
};


export type MutationPublishJournalArgs = {
  journalId: Scalars['Int']['input'];
};


export type MutationRemoveUserFromCommunityArgs = {
  communityId: Scalars['Int']['input'];
  username: Scalars['String']['input'];
};


export type MutationSetGoalArgs = {
  deadline?: InputMaybe<Scalars['Timestamp']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  priority?: InputMaybe<Scalars['String']['input']>;
  relatedArea?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
};


export type MutationSetTaskArgs = {
  deadline?: InputMaybe<Scalars['Timestamp']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  goalId: Scalars['Int']['input'];
  priority?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};


export type MutationSetTodoArgs = {
  taskId: Scalars['Int']['input'];
  todo: Scalars['String']['input'];
};


export type MutationSetUserArgs = {
  userId: Scalars['ID']['input'];
};


export type MutationShareGoalArgs = {
  communityId: Scalars['Int']['input'];
  goalId: Scalars['Int']['input'];
};


export type MutationShareJournalArgs = {
  communityId: Scalars['Int']['input'];
  journalId: Scalars['Int']['input'];
};


export type MutationUnBlockUserFromCommunityArgs = {
  communityId: Scalars['Int']['input'];
  username: Scalars['String']['input'];
};


export type MutationUpdateJournalArgs = {
  content?: InputMaybe<Scalars['String']['input']>;
  journalId: Scalars['Int']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Pausetime = {
  __typename?: 'Pausetime';
  pauseTime: Scalars['Timestamp']['output'];
  pausetimeId: Scalars['Int']['output'];
};

export type Query = {
  __typename?: 'Query';
  blockedUsersInCommunity: Array<UserWithLessDetails>;
  communities: Array<Community>;
  community: Community;
  communityInvitations: Array<Community>;
  communityRequests: Array<UserWithLessDetails>;
  getAllAspects: Array<Aspect>;
  getAllQuestions: Array<Question>;
  getAllUsers: Array<UserWithLessDetails>;
  getGoals: Array<Goal>;
  getJournalsOfUser: Array<Journal>;
  getSingleGoal: Goal;
  getSingleJournal: Journal;
  getSingleTask: Task;
  getSingleTodo: Todo;
  getSingleUser: User;
  getTasksOfGoal: Array<Task>;
  getTasksOfUser: Array<Task>;
  getTodosOfTask: Array<Todo>;
  getTodosOfUser: Array<Todo>;
  invitedUsersInCommunity: Array<UserWithLessDetails>;
  myCommunities: Array<Community>;
  requestedCommunities: Array<Community>;
  searchCommunities: Array<Community>;
  tasksCompletedAnalyticsEachDayOfGoal: Array<CountResult>;
  tasksCompletedAnalyticsEachDayOfUser: Array<CountResult>;
  tasksWorkedOnAnalyticsEachDayOfGoal: Array<CountResult>;
  tasksWorkedOnAnalyticsEachDayOfUser: Array<CountResult>;
  todayJournalDaily: Journal;
};


export type QueryBlockedUsersInCommunityArgs = {
  communityNametag: Scalars['String']['input'];
};


export type QueryCommunityArgs = {
  communityId: Scalars['Int']['input'];
};


export type QueryCommunityRequestsArgs = {
  communityNametag: Scalars['String']['input'];
};


export type QueryGetGoalsArgs = {
  userId: Scalars['ID']['input'];
};


export type QueryGetJournalsOfUserArgs = {
  userId: Scalars['ID']['input'];
};


export type QueryGetSingleGoalArgs = {
  goalId: Scalars['Int']['input'];
};


export type QueryGetSingleJournalArgs = {
  journalId: Scalars['Int']['input'];
};


export type QueryGetSingleTaskArgs = {
  taskId: Scalars['Int']['input'];
};


export type QueryGetSingleTodoArgs = {
  todoId: Scalars['Int']['input'];
};


export type QueryGetSingleUserArgs = {
  userId: Scalars['ID']['input'];
};


export type QueryGetTasksOfGoalArgs = {
  goalId: Scalars['Int']['input'];
};


export type QueryGetTasksOfUserArgs = {
  userId: Scalars['ID']['input'];
};


export type QueryGetTodosOfTaskArgs = {
  taskId: Scalars['Int']['input'];
};


export type QueryGetTodosOfUserArgs = {
  userId: Scalars['ID']['input'];
};


export type QueryInvitedUsersInCommunityArgs = {
  communityNametag: Scalars['String']['input'];
};


export type QuerySearchCommunitiesArgs = {
  searchString: Scalars['String']['input'];
};


export type QueryTasksCompletedAnalyticsEachDayOfGoalArgs = {
  goalId: Scalars['Int']['input'];
};


export type QueryTasksWorkedOnAnalyticsEachDayOfGoalArgs = {
  goalId: Scalars['Int']['input'];
};

export type Question = {
  __typename?: 'Question';
  options: Array<Scalars['String']['output']>;
  question: Scalars['String']['output'];
  questionId: Scalars['Int']['output'];
};

export type Resumetime = {
  __typename?: 'Resumetime';
  resumeTime: Scalars['Timestamp']['output'];
  resumetimeId: Scalars['Int']['output'];
};

export type Share = {
  __typename?: 'Share';
  sharedAt: Scalars['Timestamp']['output'];
  sharedBy: UserWithLessDetails;
  sharedIn: CommunityWithLessDetails;
};

export type Tag = {
  __typename?: 'Tag';
  tag: Scalars['String']['output'];
  tagId: Scalars['Int']['output'];
};

export type Task = {
  __typename?: 'Task';
  createdAt: Scalars['Timestamp']['output'];
  deadline?: Maybe<Scalars['Timestamp']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  goalId: Scalars['Int']['output'];
  isDone: Scalars['Boolean']['output'];
  milestones?: Maybe<Array<Maybe<Milestone>>>;
  order: Scalars['Int']['output'];
  priority: Scalars['String']['output'];
  taskId: Scalars['Int']['output'];
  timelapsed?: Maybe<Timelapse>;
  title: Scalars['String']['output'];
  todos?: Maybe<Array<Maybe<Todo>>>;
  updatedAt?: Maybe<Scalars['Timestamp']['output']>;
};

export type TimeDuration = {
  __typename?: 'TimeDuration';
  days: Scalars['Int']['output'];
  hours: Scalars['Int']['output'];
  minutes: Scalars['Int']['output'];
  seconds: Scalars['Int']['output'];
};

export type Timelapse = {
  __typename?: 'Timelapse';
  duration?: Maybe<TimeDuration>;
  endTime?: Maybe<Scalars['Timestamp']['output']>;
  pausetimes?: Maybe<Array<Maybe<Pausetime>>>;
  resumetimes?: Maybe<Array<Maybe<Resumetime>>>;
  startTime: Scalars['Timestamp']['output'];
  timelapseId: Scalars['Int']['output'];
};

export type Todo = {
  __typename?: 'Todo';
  createdAt: Scalars['Timestamp']['output'];
  isDone: Scalars['Boolean']['output'];
  order: Scalars['Int']['output'];
  timelapsed?: Maybe<Timelapse>;
  todo: Scalars['String']['output'];
  todoId: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['Timestamp']['output']>;
};

export type User = {
  __typename?: 'User';
  aspects: Array<Aspect>;
  banned: Scalars['Boolean']['output'];
  communities: Array<CommunityWithLessDetails>;
  createdAt: Scalars['Timestamp']['output'];
  emailAddresses: Array<UserEmailAddress>;
  firstName: Scalars['String']['output'];
  goals: Array<Goal>;
  imageUrl: Scalars['URL']['output'];
  journals: Array<Journal>;
  lastName: Scalars['String']['output'];
  questions?: Maybe<Array<Maybe<Question>>>;
  updatedAt: Scalars['Timestamp']['output'];
  userId: Scalars['ID']['output'];
  username: Scalars['String']['output'];
};

export type UserEmailAddress = {
  __typename?: 'UserEmailAddress';
  emailAddress: Scalars['EmailAddress']['output'];
  isPrimary: Scalars['Boolean']['output'];
  verified: Scalars['Boolean']['output'];
};

export type UserWithLessDetails = {
  __typename?: 'UserWithLessDetails';
  banned: Scalars['Boolean']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  imageUrl: Scalars['URL']['output'];
  lastName: Scalars['String']['output'];
  username: Scalars['String']['output'];
};

export type UserWithRole = {
  __typename?: 'UserWithRole';
  role: Scalars['String']['output'];
  user: UserWithLessDetails;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AccountNumber: ResolverTypeWrapper<Scalars['AccountNumber']['output']>;
  Aspect: ResolverTypeWrapper<Aspect>;
  BigInt: ResolverTypeWrapper<Scalars['BigInt']['output']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Byte: ResolverTypeWrapper<Scalars['Byte']['output']>;
  Comment: ResolverTypeWrapper<Comment>;
  Community: ResolverTypeWrapper<Community>;
  CommunityWithLessDetails: ResolverTypeWrapper<CommunityWithLessDetails>;
  CountResult: ResolverTypeWrapper<CountResult>;
  CountryCode: ResolverTypeWrapper<Scalars['CountryCode']['output']>;
  CreateCommunityInput: CreateCommunityInput;
  Cuid: ResolverTypeWrapper<Scalars['Cuid']['output']>;
  Currency: ResolverTypeWrapper<Scalars['Currency']['output']>;
  DID: ResolverTypeWrapper<Scalars['DID']['output']>;
  Date: ResolverTypeWrapper<Scalars['Date']['output']>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  DateTimeISO: ResolverTypeWrapper<Scalars['DateTimeISO']['output']>;
  DeweyDecimal: ResolverTypeWrapper<Scalars['DeweyDecimal']['output']>;
  Duration: ResolverTypeWrapper<Scalars['Duration']['output']>;
  EditCommunityInput: EditCommunityInput;
  EmailAddress: ResolverTypeWrapper<Scalars['EmailAddress']['output']>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  GUID: ResolverTypeWrapper<Scalars['GUID']['output']>;
  Goal: ResolverTypeWrapper<Goal>;
  GoalQna: ResolverTypeWrapper<GoalQna>;
  HSL: ResolverTypeWrapper<Scalars['HSL']['output']>;
  HSLA: ResolverTypeWrapper<Scalars['HSLA']['output']>;
  HexColorCode: ResolverTypeWrapper<Scalars['HexColorCode']['output']>;
  Hexadecimal: ResolverTypeWrapper<Scalars['Hexadecimal']['output']>;
  IBAN: ResolverTypeWrapper<Scalars['IBAN']['output']>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  IP: ResolverTypeWrapper<Scalars['IP']['output']>;
  IPCPatent: ResolverTypeWrapper<Scalars['IPCPatent']['output']>;
  IPv4: ResolverTypeWrapper<Scalars['IPv4']['output']>;
  IPv6: ResolverTypeWrapper<Scalars['IPv6']['output']>;
  ISBN: ResolverTypeWrapper<Scalars['ISBN']['output']>;
  ISO8601Duration: ResolverTypeWrapper<Scalars['ISO8601Duration']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  JSON: ResolverTypeWrapper<Scalars['JSON']['output']>;
  JSONObject: ResolverTypeWrapper<Scalars['JSONObject']['output']>;
  JWT: ResolverTypeWrapper<Scalars['JWT']['output']>;
  Journal: ResolverTypeWrapper<Journal>;
  LCCSubclass: ResolverTypeWrapper<Scalars['LCCSubclass']['output']>;
  Latitude: ResolverTypeWrapper<Scalars['Latitude']['output']>;
  Like: ResolverTypeWrapper<Like>;
  LocalDate: ResolverTypeWrapper<Scalars['LocalDate']['output']>;
  LocalDateTime: ResolverTypeWrapper<Scalars['LocalDateTime']['output']>;
  LocalEndTime: ResolverTypeWrapper<Scalars['LocalEndTime']['output']>;
  LocalTime: ResolverTypeWrapper<Scalars['LocalTime']['output']>;
  Locale: ResolverTypeWrapper<Scalars['Locale']['output']>;
  Long: ResolverTypeWrapper<Scalars['Long']['output']>;
  Longitude: ResolverTypeWrapper<Scalars['Longitude']['output']>;
  MAC: ResolverTypeWrapper<Scalars['MAC']['output']>;
  Milestone: ResolverTypeWrapper<Milestone>;
  Mutation: ResolverTypeWrapper<{}>;
  NegativeFloat: ResolverTypeWrapper<Scalars['NegativeFloat']['output']>;
  NegativeInt: ResolverTypeWrapper<Scalars['NegativeInt']['output']>;
  NonEmptyString: ResolverTypeWrapper<Scalars['NonEmptyString']['output']>;
  NonNegativeFloat: ResolverTypeWrapper<Scalars['NonNegativeFloat']['output']>;
  NonNegativeInt: ResolverTypeWrapper<Scalars['NonNegativeInt']['output']>;
  NonPositiveFloat: ResolverTypeWrapper<Scalars['NonPositiveFloat']['output']>;
  NonPositiveInt: ResolverTypeWrapper<Scalars['NonPositiveInt']['output']>;
  ObjectID: ResolverTypeWrapper<Scalars['ObjectID']['output']>;
  Pausetime: ResolverTypeWrapper<Pausetime>;
  PhoneNumber: ResolverTypeWrapper<Scalars['PhoneNumber']['output']>;
  Port: ResolverTypeWrapper<Scalars['Port']['output']>;
  PositiveFloat: ResolverTypeWrapper<Scalars['PositiveFloat']['output']>;
  PositiveInt: ResolverTypeWrapper<Scalars['PositiveInt']['output']>;
  PostalCode: ResolverTypeWrapper<Scalars['PostalCode']['output']>;
  Query: ResolverTypeWrapper<{}>;
  Question: ResolverTypeWrapper<Question>;
  RGB: ResolverTypeWrapper<Scalars['RGB']['output']>;
  RGBA: ResolverTypeWrapper<Scalars['RGBA']['output']>;
  Resumetime: ResolverTypeWrapper<Resumetime>;
  RoutingNumber: ResolverTypeWrapper<Scalars['RoutingNumber']['output']>;
  SafeInt: ResolverTypeWrapper<Scalars['SafeInt']['output']>;
  SemVer: ResolverTypeWrapper<Scalars['SemVer']['output']>;
  Share: ResolverTypeWrapper<Share>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Tag: ResolverTypeWrapper<Tag>;
  Task: ResolverTypeWrapper<Task>;
  Time: ResolverTypeWrapper<Scalars['Time']['output']>;
  TimeDuration: ResolverTypeWrapper<TimeDuration>;
  TimeZone: ResolverTypeWrapper<Scalars['TimeZone']['output']>;
  Timelapse: ResolverTypeWrapper<Timelapse>;
  Timestamp: ResolverTypeWrapper<Scalars['Timestamp']['output']>;
  Todo: ResolverTypeWrapper<Todo>;
  URL: ResolverTypeWrapper<Scalars['URL']['output']>;
  USCurrency: ResolverTypeWrapper<Scalars['USCurrency']['output']>;
  UUID: ResolverTypeWrapper<Scalars['UUID']['output']>;
  UnsignedFloat: ResolverTypeWrapper<Scalars['UnsignedFloat']['output']>;
  UnsignedInt: ResolverTypeWrapper<Scalars['UnsignedInt']['output']>;
  User: ResolverTypeWrapper<User>;
  UserEmailAddress: ResolverTypeWrapper<UserEmailAddress>;
  UserWithLessDetails: ResolverTypeWrapper<UserWithLessDetails>;
  UserWithRole: ResolverTypeWrapper<UserWithRole>;
  UtcOffset: ResolverTypeWrapper<Scalars['UtcOffset']['output']>;
  Void: ResolverTypeWrapper<Scalars['Void']['output']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AccountNumber: Scalars['AccountNumber']['output'];
  Aspect: Aspect;
  BigInt: Scalars['BigInt']['output'];
  Boolean: Scalars['Boolean']['output'];
  Byte: Scalars['Byte']['output'];
  Comment: Comment;
  Community: Community;
  CommunityWithLessDetails: CommunityWithLessDetails;
  CountResult: CountResult;
  CountryCode: Scalars['CountryCode']['output'];
  CreateCommunityInput: CreateCommunityInput;
  Cuid: Scalars['Cuid']['output'];
  Currency: Scalars['Currency']['output'];
  DID: Scalars['DID']['output'];
  Date: Scalars['Date']['output'];
  DateTime: Scalars['DateTime']['output'];
  DateTimeISO: Scalars['DateTimeISO']['output'];
  DeweyDecimal: Scalars['DeweyDecimal']['output'];
  Duration: Scalars['Duration']['output'];
  EditCommunityInput: EditCommunityInput;
  EmailAddress: Scalars['EmailAddress']['output'];
  Float: Scalars['Float']['output'];
  GUID: Scalars['GUID']['output'];
  Goal: Goal;
  GoalQna: GoalQna;
  HSL: Scalars['HSL']['output'];
  HSLA: Scalars['HSLA']['output'];
  HexColorCode: Scalars['HexColorCode']['output'];
  Hexadecimal: Scalars['Hexadecimal']['output'];
  IBAN: Scalars['IBAN']['output'];
  ID: Scalars['ID']['output'];
  IP: Scalars['IP']['output'];
  IPCPatent: Scalars['IPCPatent']['output'];
  IPv4: Scalars['IPv4']['output'];
  IPv6: Scalars['IPv6']['output'];
  ISBN: Scalars['ISBN']['output'];
  ISO8601Duration: Scalars['ISO8601Duration']['output'];
  Int: Scalars['Int']['output'];
  JSON: Scalars['JSON']['output'];
  JSONObject: Scalars['JSONObject']['output'];
  JWT: Scalars['JWT']['output'];
  Journal: Journal;
  LCCSubclass: Scalars['LCCSubclass']['output'];
  Latitude: Scalars['Latitude']['output'];
  Like: Like;
  LocalDate: Scalars['LocalDate']['output'];
  LocalDateTime: Scalars['LocalDateTime']['output'];
  LocalEndTime: Scalars['LocalEndTime']['output'];
  LocalTime: Scalars['LocalTime']['output'];
  Locale: Scalars['Locale']['output'];
  Long: Scalars['Long']['output'];
  Longitude: Scalars['Longitude']['output'];
  MAC: Scalars['MAC']['output'];
  Milestone: Milestone;
  Mutation: {};
  NegativeFloat: Scalars['NegativeFloat']['output'];
  NegativeInt: Scalars['NegativeInt']['output'];
  NonEmptyString: Scalars['NonEmptyString']['output'];
  NonNegativeFloat: Scalars['NonNegativeFloat']['output'];
  NonNegativeInt: Scalars['NonNegativeInt']['output'];
  NonPositiveFloat: Scalars['NonPositiveFloat']['output'];
  NonPositiveInt: Scalars['NonPositiveInt']['output'];
  ObjectID: Scalars['ObjectID']['output'];
  Pausetime: Pausetime;
  PhoneNumber: Scalars['PhoneNumber']['output'];
  Port: Scalars['Port']['output'];
  PositiveFloat: Scalars['PositiveFloat']['output'];
  PositiveInt: Scalars['PositiveInt']['output'];
  PostalCode: Scalars['PostalCode']['output'];
  Query: {};
  Question: Question;
  RGB: Scalars['RGB']['output'];
  RGBA: Scalars['RGBA']['output'];
  Resumetime: Resumetime;
  RoutingNumber: Scalars['RoutingNumber']['output'];
  SafeInt: Scalars['SafeInt']['output'];
  SemVer: Scalars['SemVer']['output'];
  Share: Share;
  String: Scalars['String']['output'];
  Tag: Tag;
  Task: Task;
  Time: Scalars['Time']['output'];
  TimeDuration: TimeDuration;
  TimeZone: Scalars['TimeZone']['output'];
  Timelapse: Timelapse;
  Timestamp: Scalars['Timestamp']['output'];
  Todo: Todo;
  URL: Scalars['URL']['output'];
  USCurrency: Scalars['USCurrency']['output'];
  UUID: Scalars['UUID']['output'];
  UnsignedFloat: Scalars['UnsignedFloat']['output'];
  UnsignedInt: Scalars['UnsignedInt']['output'];
  User: User;
  UserEmailAddress: UserEmailAddress;
  UserWithLessDetails: UserWithLessDetails;
  UserWithRole: UserWithRole;
  UtcOffset: Scalars['UtcOffset']['output'];
  Void: Scalars['Void']['output'];
};

export interface AccountNumberScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['AccountNumber'], any> {
  name: 'AccountNumber';
}

export type AspectResolvers<ContextType = any, ParentType extends ResolversParentTypes['Aspect'] = ResolversParentTypes['Aspect']> = {
  aspect?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  aspectId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  tags?: Resolver<Array<ResolversTypes['Tag']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

export interface ByteScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Byte'], any> {
  name: 'Byte';
}

export type CommentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Comment'] = ResolversParentTypes['Comment']> = {
  author?: Resolver<ResolversTypes['UserWithLessDetails'], ParentType, ContextType>;
  comment?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  commentId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Timestamp'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Timestamp']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommunityResolvers<ContextType = any, ParentType extends ResolversParentTypes['Community'] = ResolversParentTypes['Community']> = {
  community?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  communityId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Timestamp'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  goals?: Resolver<Array<ResolversTypes['Goal']>, ParentType, ContextType>;
  journals?: Resolver<Array<ResolversTypes['Journal']>, ParentType, ContextType>;
  nametag?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  privacy?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Timestamp'], ParentType, ContextType>;
  users?: Resolver<Array<Maybe<ResolversTypes['UserWithRole']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommunityWithLessDetailsResolvers<ContextType = any, ParentType extends ResolversParentTypes['CommunityWithLessDetails'] = ResolversParentTypes['CommunityWithLessDetails']> = {
  community?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  communityId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Timestamp'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nametag?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  privacy?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Timestamp'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CountResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['CountResult'] = ResolversParentTypes['CountResult']> = {
  count?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['Timestamp'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface CountryCodeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['CountryCode'], any> {
  name: 'CountryCode';
}

export interface CuidScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Cuid'], any> {
  name: 'Cuid';
}

export interface CurrencyScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Currency'], any> {
  name: 'Currency';
}

export interface DidScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DID'], any> {
  name: 'DID';
}

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export interface DateTimeIsoScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTimeISO'], any> {
  name: 'DateTimeISO';
}

export interface DeweyDecimalScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DeweyDecimal'], any> {
  name: 'DeweyDecimal';
}

export interface DurationScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Duration'], any> {
  name: 'Duration';
}

export interface EmailAddressScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['EmailAddress'], any> {
  name: 'EmailAddress';
}

export interface GuidScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['GUID'], any> {
  name: 'GUID';
}

export type GoalResolvers<ContextType = any, ParentType extends ResolversParentTypes['Goal'] = ResolversParentTypes['Goal']> = {
  createdAt?: Resolver<ResolversTypes['Timestamp'], ParentType, ContextType>;
  createdBy?: Resolver<ResolversTypes['UserWithLessDetails'], ParentType, ContextType>;
  deadline?: Resolver<Maybe<ResolversTypes['Timestamp']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  goalId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  goalQnas?: Resolver<Maybe<Array<Maybe<ResolversTypes['GoalQna']>>>, ParentType, ContextType>;
  isActive?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isDone?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  likedBy?: Resolver<Array<ResolversTypes['Like']>, ParentType, ContextType>;
  order?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  priority?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  relatedArea?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sharedBy?: Resolver<Array<ResolversTypes['Share']>, ParentType, ContextType>;
  streak?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  tasks?: Resolver<Array<ResolversTypes['Task']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Timestamp']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GoalQnaResolvers<ContextType = any, ParentType extends ResolversParentTypes['GoalQna'] = ResolversParentTypes['GoalQna']> = {
  answer?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  goalQnaId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  question?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface HslScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['HSL'], any> {
  name: 'HSL';
}

export interface HslaScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['HSLA'], any> {
  name: 'HSLA';
}

export interface HexColorCodeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['HexColorCode'], any> {
  name: 'HexColorCode';
}

export interface HexadecimalScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Hexadecimal'], any> {
  name: 'Hexadecimal';
}

export interface IbanScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['IBAN'], any> {
  name: 'IBAN';
}

export interface IpScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['IP'], any> {
  name: 'IP';
}

export interface IpcPatentScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['IPCPatent'], any> {
  name: 'IPCPatent';
}

export interface IPv4ScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['IPv4'], any> {
  name: 'IPv4';
}

export interface IPv6ScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['IPv6'], any> {
  name: 'IPv6';
}

export interface IsbnScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['ISBN'], any> {
  name: 'ISBN';
}

export interface Iso8601DurationScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['ISO8601Duration'], any> {
  name: 'ISO8601Duration';
}

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export interface JsonObjectScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSONObject'], any> {
  name: 'JSONObject';
}

export interface JwtScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JWT'], any> {
  name: 'JWT';
}

export type JournalResolvers<ContextType = any, ParentType extends ResolversParentTypes['Journal'] = ResolversParentTypes['Journal']> = {
  access?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  comments?: Resolver<Array<ResolversTypes['Comment']>, ParentType, ContextType>;
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdBy?: Resolver<ResolversTypes['UserWithLessDetails'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['Timestamp'], ParentType, ContextType>;
  journalId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  likedBy?: Resolver<Array<ResolversTypes['Like']>, ParentType, ContextType>;
  sharedBy?: Resolver<Array<ResolversTypes['Share']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface LccSubclassScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['LCCSubclass'], any> {
  name: 'LCCSubclass';
}

export interface LatitudeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Latitude'], any> {
  name: 'Latitude';
}

export type LikeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Like'] = ResolversParentTypes['Like']> = {
  likedAt?: Resolver<ResolversTypes['Timestamp'], ParentType, ContextType>;
  likedBy?: Resolver<ResolversTypes['UserWithLessDetails'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface LocalDateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['LocalDate'], any> {
  name: 'LocalDate';
}

export interface LocalDateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['LocalDateTime'], any> {
  name: 'LocalDateTime';
}

export interface LocalEndTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['LocalEndTime'], any> {
  name: 'LocalEndTime';
}

export interface LocalTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['LocalTime'], any> {
  name: 'LocalTime';
}

export interface LocaleScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Locale'], any> {
  name: 'Locale';
}

export interface LongScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Long'], any> {
  name: 'Long';
}

export interface LongitudeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Longitude'], any> {
  name: 'Longitude';
}

export interface MacScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['MAC'], any> {
  name: 'MAC';
}

export type MilestoneResolvers<ContextType = any, ParentType extends ResolversParentTypes['Milestone'] = ResolversParentTypes['Milestone']> = {
  createdAt?: Resolver<ResolversTypes['Timestamp'], ParentType, ContextType>;
  milestone?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  milestoneId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  acceptCommunityInvite?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<MutationAcceptCommunityInviteArgs, 'communityId'>>;
  addUserToCommunity?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<MutationAddUserToCommunityArgs, 'communityId' | 'username'>>;
  blockUserFromCommunity?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<MutationBlockUserFromCommunityArgs, 'communityId' | 'username'>>;
  createCommunity?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<MutationCreateCommunityArgs, 'input'>>;
  declineCommunityInvite?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<MutationDeclineCommunityInviteArgs, 'communityId'>>;
  deleteGoal?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<MutationDeleteGoalArgs, 'goalId'>>;
  deleteTask?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<MutationDeleteTaskArgs, 'taskId'>>;
  deleteTodo?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<MutationDeleteTodoArgs, 'todoId'>>;
  deleteUser?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<MutationDeleteUserArgs, 'userId'>>;
  editCommunity?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<MutationEditCommunityArgs, 'communityId' | 'input'>>;
  editGoal?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<MutationEditGoalArgs, 'goalId'>>;
  editTask?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<MutationEditTaskArgs, 'taskId'>>;
  editTodo?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<MutationEditTodoArgs, 'todoId'>>;
  enterInCommunity?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<MutationEnterInCommunityArgs, 'communityId'>>;
  inviteUserToCommunity?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<MutationInviteUserToCommunityArgs, 'communityId' | 'username'>>;
  leaveCommunity?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<MutationLeaveCommunityArgs, 'communityId'>>;
  likeGoal?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationLikeGoalArgs, 'goalId'>>;
  likeJournal?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationLikeJournalArgs, 'journalId'>>;
  makeUserAdminOfCommunity?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<MutationMakeUserAdminOfCommunityArgs, 'communityId' | 'username'>>;
  publishGoal?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<MutationPublishGoalArgs, 'goalId'>>;
  publishJournal?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<MutationPublishJournalArgs, 'journalId'>>;
  removeUserFromCommunity?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<MutationRemoveUserFromCommunityArgs, 'communityId' | 'username'>>;
  setGoal?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<MutationSetGoalArgs, 'title' | 'userId'>>;
  setTask?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<MutationSetTaskArgs, 'goalId' | 'title'>>;
  setTodo?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<MutationSetTodoArgs, 'taskId' | 'todo'>>;
  setUser?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<MutationSetUserArgs, 'userId'>>;
  shareGoal?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<MutationShareGoalArgs, 'communityId' | 'goalId'>>;
  shareJournal?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<MutationShareJournalArgs, 'communityId' | 'journalId'>>;
  unBlockUserFromCommunity?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<MutationUnBlockUserFromCommunityArgs, 'communityId' | 'username'>>;
  updateJournal?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<MutationUpdateJournalArgs, 'journalId'>>;
};

export interface NegativeFloatScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['NegativeFloat'], any> {
  name: 'NegativeFloat';
}

export interface NegativeIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['NegativeInt'], any> {
  name: 'NegativeInt';
}

export interface NonEmptyStringScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['NonEmptyString'], any> {
  name: 'NonEmptyString';
}

export interface NonNegativeFloatScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['NonNegativeFloat'], any> {
  name: 'NonNegativeFloat';
}

export interface NonNegativeIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['NonNegativeInt'], any> {
  name: 'NonNegativeInt';
}

export interface NonPositiveFloatScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['NonPositiveFloat'], any> {
  name: 'NonPositiveFloat';
}

export interface NonPositiveIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['NonPositiveInt'], any> {
  name: 'NonPositiveInt';
}

export interface ObjectIdScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['ObjectID'], any> {
  name: 'ObjectID';
}

export type PausetimeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Pausetime'] = ResolversParentTypes['Pausetime']> = {
  pauseTime?: Resolver<ResolversTypes['Timestamp'], ParentType, ContextType>;
  pausetimeId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface PhoneNumberScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['PhoneNumber'], any> {
  name: 'PhoneNumber';
}

export interface PortScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Port'], any> {
  name: 'Port';
}

export interface PositiveFloatScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['PositiveFloat'], any> {
  name: 'PositiveFloat';
}

export interface PositiveIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['PositiveInt'], any> {
  name: 'PositiveInt';
}

export interface PostalCodeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['PostalCode'], any> {
  name: 'PostalCode';
}

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  blockedUsersInCommunity?: Resolver<Array<ResolversTypes['UserWithLessDetails']>, ParentType, ContextType, RequireFields<QueryBlockedUsersInCommunityArgs, 'communityNametag'>>;
  communities?: Resolver<Array<ResolversTypes['Community']>, ParentType, ContextType>;
  community?: Resolver<ResolversTypes['Community'], ParentType, ContextType, RequireFields<QueryCommunityArgs, 'communityId'>>;
  communityInvitations?: Resolver<Array<ResolversTypes['Community']>, ParentType, ContextType>;
  communityRequests?: Resolver<Array<ResolversTypes['UserWithLessDetails']>, ParentType, ContextType, RequireFields<QueryCommunityRequestsArgs, 'communityNametag'>>;
  getAllAspects?: Resolver<Array<ResolversTypes['Aspect']>, ParentType, ContextType>;
  getAllQuestions?: Resolver<Array<ResolversTypes['Question']>, ParentType, ContextType>;
  getAllUsers?: Resolver<Array<ResolversTypes['UserWithLessDetails']>, ParentType, ContextType>;
  getGoals?: Resolver<Array<ResolversTypes['Goal']>, ParentType, ContextType, RequireFields<QueryGetGoalsArgs, 'userId'>>;
  getJournalsOfUser?: Resolver<Array<ResolversTypes['Journal']>, ParentType, ContextType, RequireFields<QueryGetJournalsOfUserArgs, 'userId'>>;
  getSingleGoal?: Resolver<ResolversTypes['Goal'], ParentType, ContextType, RequireFields<QueryGetSingleGoalArgs, 'goalId'>>;
  getSingleJournal?: Resolver<ResolversTypes['Journal'], ParentType, ContextType, RequireFields<QueryGetSingleJournalArgs, 'journalId'>>;
  getSingleTask?: Resolver<ResolversTypes['Task'], ParentType, ContextType, RequireFields<QueryGetSingleTaskArgs, 'taskId'>>;
  getSingleTodo?: Resolver<ResolversTypes['Todo'], ParentType, ContextType, RequireFields<QueryGetSingleTodoArgs, 'todoId'>>;
  getSingleUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<QueryGetSingleUserArgs, 'userId'>>;
  getTasksOfGoal?: Resolver<Array<ResolversTypes['Task']>, ParentType, ContextType, RequireFields<QueryGetTasksOfGoalArgs, 'goalId'>>;
  getTasksOfUser?: Resolver<Array<ResolversTypes['Task']>, ParentType, ContextType, RequireFields<QueryGetTasksOfUserArgs, 'userId'>>;
  getTodosOfTask?: Resolver<Array<ResolversTypes['Todo']>, ParentType, ContextType, RequireFields<QueryGetTodosOfTaskArgs, 'taskId'>>;
  getTodosOfUser?: Resolver<Array<ResolversTypes['Todo']>, ParentType, ContextType, RequireFields<QueryGetTodosOfUserArgs, 'userId'>>;
  invitedUsersInCommunity?: Resolver<Array<ResolversTypes['UserWithLessDetails']>, ParentType, ContextType, RequireFields<QueryInvitedUsersInCommunityArgs, 'communityNametag'>>;
  myCommunities?: Resolver<Array<ResolversTypes['Community']>, ParentType, ContextType>;
  requestedCommunities?: Resolver<Array<ResolversTypes['Community']>, ParentType, ContextType>;
  searchCommunities?: Resolver<Array<ResolversTypes['Community']>, ParentType, ContextType, RequireFields<QuerySearchCommunitiesArgs, 'searchString'>>;
  tasksCompletedAnalyticsEachDayOfGoal?: Resolver<Array<ResolversTypes['CountResult']>, ParentType, ContextType, RequireFields<QueryTasksCompletedAnalyticsEachDayOfGoalArgs, 'goalId'>>;
  tasksCompletedAnalyticsEachDayOfUser?: Resolver<Array<ResolversTypes['CountResult']>, ParentType, ContextType>;
  tasksWorkedOnAnalyticsEachDayOfGoal?: Resolver<Array<ResolversTypes['CountResult']>, ParentType, ContextType, RequireFields<QueryTasksWorkedOnAnalyticsEachDayOfGoalArgs, 'goalId'>>;
  tasksWorkedOnAnalyticsEachDayOfUser?: Resolver<Array<ResolversTypes['CountResult']>, ParentType, ContextType>;
  todayJournalDaily?: Resolver<ResolversTypes['Journal'], ParentType, ContextType>;
};

export type QuestionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Question'] = ResolversParentTypes['Question']> = {
  options?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  question?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  questionId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface RgbScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['RGB'], any> {
  name: 'RGB';
}

export interface RgbaScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['RGBA'], any> {
  name: 'RGBA';
}

export type ResumetimeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Resumetime'] = ResolversParentTypes['Resumetime']> = {
  resumeTime?: Resolver<ResolversTypes['Timestamp'], ParentType, ContextType>;
  resumetimeId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface RoutingNumberScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['RoutingNumber'], any> {
  name: 'RoutingNumber';
}

export interface SafeIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['SafeInt'], any> {
  name: 'SafeInt';
}

export interface SemVerScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['SemVer'], any> {
  name: 'SemVer';
}

export type ShareResolvers<ContextType = any, ParentType extends ResolversParentTypes['Share'] = ResolversParentTypes['Share']> = {
  sharedAt?: Resolver<ResolversTypes['Timestamp'], ParentType, ContextType>;
  sharedBy?: Resolver<ResolversTypes['UserWithLessDetails'], ParentType, ContextType>;
  sharedIn?: Resolver<ResolversTypes['CommunityWithLessDetails'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TagResolvers<ContextType = any, ParentType extends ResolversParentTypes['Tag'] = ResolversParentTypes['Tag']> = {
  tag?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tagId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TaskResolvers<ContextType = any, ParentType extends ResolversParentTypes['Task'] = ResolversParentTypes['Task']> = {
  createdAt?: Resolver<ResolversTypes['Timestamp'], ParentType, ContextType>;
  deadline?: Resolver<Maybe<ResolversTypes['Timestamp']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  goalId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  isDone?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  milestones?: Resolver<Maybe<Array<Maybe<ResolversTypes['Milestone']>>>, ParentType, ContextType>;
  order?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  priority?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  taskId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timelapsed?: Resolver<Maybe<ResolversTypes['Timelapse']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  todos?: Resolver<Maybe<Array<Maybe<ResolversTypes['Todo']>>>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Timestamp']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface TimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Time'], any> {
  name: 'Time';
}

export type TimeDurationResolvers<ContextType = any, ParentType extends ResolversParentTypes['TimeDuration'] = ResolversParentTypes['TimeDuration']> = {
  days?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  hours?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  minutes?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  seconds?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface TimeZoneScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['TimeZone'], any> {
  name: 'TimeZone';
}

export type TimelapseResolvers<ContextType = any, ParentType extends ResolversParentTypes['Timelapse'] = ResolversParentTypes['Timelapse']> = {
  duration?: Resolver<Maybe<ResolversTypes['TimeDuration']>, ParentType, ContextType>;
  endTime?: Resolver<Maybe<ResolversTypes['Timestamp']>, ParentType, ContextType>;
  pausetimes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Pausetime']>>>, ParentType, ContextType>;
  resumetimes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Resumetime']>>>, ParentType, ContextType>;
  startTime?: Resolver<ResolversTypes['Timestamp'], ParentType, ContextType>;
  timelapseId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface TimestampScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Timestamp'], any> {
  name: 'Timestamp';
}

export type TodoResolvers<ContextType = any, ParentType extends ResolversParentTypes['Todo'] = ResolversParentTypes['Todo']> = {
  createdAt?: Resolver<ResolversTypes['Timestamp'], ParentType, ContextType>;
  isDone?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  order?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timelapsed?: Resolver<Maybe<ResolversTypes['Timelapse']>, ParentType, ContextType>;
  todo?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  todoId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Timestamp']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface UrlScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['URL'], any> {
  name: 'URL';
}

export interface UsCurrencyScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['USCurrency'], any> {
  name: 'USCurrency';
}

export interface UuidScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['UUID'], any> {
  name: 'UUID';
}

export interface UnsignedFloatScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['UnsignedFloat'], any> {
  name: 'UnsignedFloat';
}

export interface UnsignedIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['UnsignedInt'], any> {
  name: 'UnsignedInt';
}

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  aspects?: Resolver<Array<ResolversTypes['Aspect']>, ParentType, ContextType>;
  banned?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  communities?: Resolver<Array<ResolversTypes['CommunityWithLessDetails']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Timestamp'], ParentType, ContextType>;
  emailAddresses?: Resolver<Array<ResolversTypes['UserEmailAddress']>, ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  goals?: Resolver<Array<ResolversTypes['Goal']>, ParentType, ContextType>;
  imageUrl?: Resolver<ResolversTypes['URL'], ParentType, ContextType>;
  journals?: Resolver<Array<ResolversTypes['Journal']>, ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  questions?: Resolver<Maybe<Array<Maybe<ResolversTypes['Question']>>>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Timestamp'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserEmailAddressResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserEmailAddress'] = ResolversParentTypes['UserEmailAddress']> = {
  emailAddress?: Resolver<ResolversTypes['EmailAddress'], ParentType, ContextType>;
  isPrimary?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  verified?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserWithLessDetailsResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserWithLessDetails'] = ResolversParentTypes['UserWithLessDetails']> = {
  banned?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  imageUrl?: Resolver<ResolversTypes['URL'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserWithRoleResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserWithRole'] = ResolversParentTypes['UserWithRole']> = {
  role?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['UserWithLessDetails'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface UtcOffsetScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['UtcOffset'], any> {
  name: 'UtcOffset';
}

export interface VoidScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Void'], any> {
  name: 'Void';
}

export type Resolvers<ContextType = any> = {
  AccountNumber?: GraphQLScalarType;
  Aspect?: AspectResolvers<ContextType>;
  BigInt?: GraphQLScalarType;
  Byte?: GraphQLScalarType;
  Comment?: CommentResolvers<ContextType>;
  Community?: CommunityResolvers<ContextType>;
  CommunityWithLessDetails?: CommunityWithLessDetailsResolvers<ContextType>;
  CountResult?: CountResultResolvers<ContextType>;
  CountryCode?: GraphQLScalarType;
  Cuid?: GraphQLScalarType;
  Currency?: GraphQLScalarType;
  DID?: GraphQLScalarType;
  Date?: GraphQLScalarType;
  DateTime?: GraphQLScalarType;
  DateTimeISO?: GraphQLScalarType;
  DeweyDecimal?: GraphQLScalarType;
  Duration?: GraphQLScalarType;
  EmailAddress?: GraphQLScalarType;
  GUID?: GraphQLScalarType;
  Goal?: GoalResolvers<ContextType>;
  GoalQna?: GoalQnaResolvers<ContextType>;
  HSL?: GraphQLScalarType;
  HSLA?: GraphQLScalarType;
  HexColorCode?: GraphQLScalarType;
  Hexadecimal?: GraphQLScalarType;
  IBAN?: GraphQLScalarType;
  IP?: GraphQLScalarType;
  IPCPatent?: GraphQLScalarType;
  IPv4?: GraphQLScalarType;
  IPv6?: GraphQLScalarType;
  ISBN?: GraphQLScalarType;
  ISO8601Duration?: GraphQLScalarType;
  JSON?: GraphQLScalarType;
  JSONObject?: GraphQLScalarType;
  JWT?: GraphQLScalarType;
  Journal?: JournalResolvers<ContextType>;
  LCCSubclass?: GraphQLScalarType;
  Latitude?: GraphQLScalarType;
  Like?: LikeResolvers<ContextType>;
  LocalDate?: GraphQLScalarType;
  LocalDateTime?: GraphQLScalarType;
  LocalEndTime?: GraphQLScalarType;
  LocalTime?: GraphQLScalarType;
  Locale?: GraphQLScalarType;
  Long?: GraphQLScalarType;
  Longitude?: GraphQLScalarType;
  MAC?: GraphQLScalarType;
  Milestone?: MilestoneResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  NegativeFloat?: GraphQLScalarType;
  NegativeInt?: GraphQLScalarType;
  NonEmptyString?: GraphQLScalarType;
  NonNegativeFloat?: GraphQLScalarType;
  NonNegativeInt?: GraphQLScalarType;
  NonPositiveFloat?: GraphQLScalarType;
  NonPositiveInt?: GraphQLScalarType;
  ObjectID?: GraphQLScalarType;
  Pausetime?: PausetimeResolvers<ContextType>;
  PhoneNumber?: GraphQLScalarType;
  Port?: GraphQLScalarType;
  PositiveFloat?: GraphQLScalarType;
  PositiveInt?: GraphQLScalarType;
  PostalCode?: GraphQLScalarType;
  Query?: QueryResolvers<ContextType>;
  Question?: QuestionResolvers<ContextType>;
  RGB?: GraphQLScalarType;
  RGBA?: GraphQLScalarType;
  Resumetime?: ResumetimeResolvers<ContextType>;
  RoutingNumber?: GraphQLScalarType;
  SafeInt?: GraphQLScalarType;
  SemVer?: GraphQLScalarType;
  Share?: ShareResolvers<ContextType>;
  Tag?: TagResolvers<ContextType>;
  Task?: TaskResolvers<ContextType>;
  Time?: GraphQLScalarType;
  TimeDuration?: TimeDurationResolvers<ContextType>;
  TimeZone?: GraphQLScalarType;
  Timelapse?: TimelapseResolvers<ContextType>;
  Timestamp?: GraphQLScalarType;
  Todo?: TodoResolvers<ContextType>;
  URL?: GraphQLScalarType;
  USCurrency?: GraphQLScalarType;
  UUID?: GraphQLScalarType;
  UnsignedFloat?: GraphQLScalarType;
  UnsignedInt?: GraphQLScalarType;
  User?: UserResolvers<ContextType>;
  UserEmailAddress?: UserEmailAddressResolvers<ContextType>;
  UserWithLessDetails?: UserWithLessDetailsResolvers<ContextType>;
  UserWithRole?: UserWithRoleResolvers<ContextType>;
  UtcOffset?: GraphQLScalarType;
  Void?: GraphQLScalarType;
};

