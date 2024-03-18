import {
  AppShell, Burger, Flex, Progress,
} from '@mantine/core';
import { useAppContext } from './contexts/AppContext';
import Form from './components/Form';

import './App.css';

const App = () => {
  const {
    opened,
    toggle,
    isGenerating,
    progress,
    output,
  } = useAppContext();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Burger
          opened={opened}
          onClick={toggle}
          hiddenFrom="sm"
          size="sm"
        />
        <div>🧌 Comfy Dungeon</div>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <Form />
      </AppShell.Navbar>

      <AppShell.Main style={{ height: '100dvh' }}>
        <div style={{ position: 'relative', height: '100%' }}>
          {isGenerating && <Progress value={progress * 100} />}
          <Flex
            direction="column"
            justify="center"
            align="center"
            style={{ position: 'absolute', inset: 0 }}
          >
            {output && (
              <img
                style={{ aspectRatio: 1, width: '100%', maxWidth: 1024 }}
                alt=""
                src={`http://127.0.0.1:8188/view?filename=${output.images[0].filename}&type=output&subfolder=${output.images[0].subfolder}&rand=123`}
              />
            )}
          </Flex>
        </div>
      </AppShell.Main>
    </AppShell>
  );
};

export default App;
