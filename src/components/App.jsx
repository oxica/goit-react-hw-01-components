import { Profile } from './Profile';
import user from '../configs/user';

import { Container } from './Container';
import { Statistics } from './Statistics';
import data from '../configs/data';

export const App = () => {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
    </Container>
  );
};
