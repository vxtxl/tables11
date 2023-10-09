import React from 'react';
import jsonData from './data.json';

import {
  Table,
  Header,
  HeaderRow,
  Body,
  Row,
  HeaderCell,
  Cell,
} from "@table-library/react-table-library/table";

import { useTheme } from "@table-library/react-table-library/theme";

import {
  useSort,
  HeaderCellSort,
} from "@table-library/react-table-library/sort";

import {
  useRowSelect,
  HeaderCellSelect,
  CellSelect,
  SelectClickTypes,
  SelectTypes,
} from "@table-library/react-table-library/select";

import {
  useTree,
  CellTree,
  TreeExpandClickTypes,
} from "@table-library/react-table-library/tree";




const THEME = {
  Table: `
  overflow: auto;
  max-height: 400px;
`,
Header: `
  position: sticky;
  top: 0;
  background-color: var(--theme-ui-colors-background);
  z-index: 1;
`,
Body: `
  margin-top: 52px;
`,
HeaderRow: `
  font-size: 14px;
  color: var(--theme-ui-colors-text-light);
  position: relative;
`,
Row: `
  font-size: 12px;
  color: var(--theme-ui-colors-text);
  position: relative;
`,
HeaderCell: `
  position: sticky;
  top: 0;
  background-color: var(--theme-ui-colors-background);
  border-bottom: 1px solid var(--theme-ui-colors-border);
`,
Cell: `
  border-bottom: 1px solid var(--theme-ui-colors-border);
  border-right: 1px solid var(--theme-ui-colors-border);
  padding: 8px;
  height: 52px;
`,
};

function MainTable() {
  const data = { nodes: jsonData };

  const theme = useTheme(THEME);

  const sort = useSort(
    data,
    {},
    {
      sortFns: {
        vopros: (array) => array.sort((a, b) => a.vopros.localeCompare(b.vopros)),
        types_name: (array) => array.sort((a, b) => a.types_name.localeCompare(b.types_name)),
        okved_name: (array) => array.sort((a, b) => a.okved_name.localeCompare(b.okved_name)),
        edizm_name: (array) => array.sort((a, b) => a.edizm_name.localeCompare(b.edizm_name)),
      },
    }
  );

  const select = useRowSelect(data, {}, {});

  const tree = useTree(
    data,
    {},
    {
      treeYLevel: 1,
    }
  );

  return (
    <div className='Table' style={{ marginTop: '666px' }}>
      <Table
        data={data}
        theme={theme}
        layout={{ fixedHeader: true }}
        sort={sort}
        select={select}
        tree={tree}
      >
        {(tableList) => (
          <>
            <Header>
              <HeaderRow >
                <HeaderCellSort sortKey="vopros">vopros</HeaderCellSort>
                <HeaderCellSort sortKey="types_name">types_name</HeaderCellSort>
                <HeaderCellSort sortKey="okved_name">okved_name</HeaderCellSort>
                <HeaderCellSort sortKey="edizm_name">edizm_name</HeaderCellSort>
                <HeaderCellSort sortKey="columns_name">columns_name</HeaderCellSort>
                <HeaderCellSort sortKey="pok_name">pok_name</HeaderCellSort>
                <HeaderCellSort sortKey="value">value</HeaderCellSort>
              </HeaderRow>
            </Header>
            <Body>
              {tableList.map((item) => (
                <Row key={item.id} item={item}>
                  <CellTree item={item}>{item.vopros}</CellTree>
                  <Cell>{item.types_name}</Cell>
                  <Cell>{item.okved_name}</Cell>
                  <Cell>{item.edizm_name}</Cell>
                  <Cell>{item.columns_name}</Cell>
                  <Cell>{item.pok_name}</Cell>
                  <Cell>{item.value}</Cell>
                </Row>
              ))}
            </Body>
          </>
        )}
      </Table>
    </div>
  );
}

export default MainTable;