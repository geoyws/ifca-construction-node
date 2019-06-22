import Writer from '@IFCASchemer/classes/Writer';

const initCmds = []; // remember to add addons and enum types

const tables = [];

const wrapUpCmds = [];

new Writer('./output.sql', initCmds, tables, wrapUpCmds);
