import Writer from '@IFCASchemer/classes/Writer';

const initCmds = [];

const tables = [];

const wrapUpCmds = [];

new Writer('./output.sql', initCmds, tables, wrapUpCmds);
