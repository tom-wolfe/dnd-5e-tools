import { DndNpcGenPage } from './app.po';

describe('dnd-npc-gen App', () => {
  let page: DndNpcGenPage;

  beforeEach(() => {
    page = new DndNpcGenPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
