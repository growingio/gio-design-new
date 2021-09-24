/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/destructuring-assignment */
import React, { useState, useEffect, useMemo } from 'react';
import { MoveOutlined } from '@gio-design/icons';
import classNames from 'classnames';
import { findIndex } from 'lodash';
import { usePrefixCls } from '@gio-design/utils';
import { SortableElement, SortableContainer, SortableHandle } from 'react-sortable-hoc';
import { arrayMoveImmutable } from 'array-move';
import { TableComponents } from '@gio-design/table/es/interface';
import { ColumnType, TableProps } from './interface';
import Table from './Table';
import './style/index';

const DragHandle = SortableHandle(() => <MoveOutlined />);

const Container = SortableContainer((props: any) => <tr {...props} />);

const DragTable = ({ columns = [], ...restProps }: TableProps<any>) => {
  const prefixCls = usePrefixCls('table');

  const [newColumns, setNewColumns] = useState(columns);

  const columnKeys = useMemo(() => newColumns.map((column: ColumnType<any>) => column.key), [newColumns]);

  const fixedColumnsKeys = useMemo(
    () => columns.map((column: ColumnType<any>) => column.fixed && column.key),
    [columns]
  );

  useEffect(() => {
    setNewColumns(columns);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const Items = SortableElement((props: any) => {
    const disabled =
      props.columnKey === 'RC_TABLE_KEY' ||
      props.columnKey === 'selection' ||
      fixedColumnsKeys?.includes(props.columnKey);
    return (
      <th {...props}>
        <span className={`${prefixCls}-drag-container`}>
          <span className={classNames(`${prefixCls}-drag-handle`, { [`${prefixCls}-drag-handle-disabled`]: disabled })}>
            <DragHandle />
          </span>
          <span {...props} />
        </span>
      </th>
    );
  });

  const onSortEnd = ({ oldIndex, newIndex }: { oldIndex: number; newIndex: number }) => {
    if (oldIndex !== newIndex) {
      const nextColumns = arrayMoveImmutable(newColumns, oldIndex, newIndex);
      setNewColumns(nextColumns);
    }
  };

  const renderContainer = (props: any) => (
    <Container
      helperClass={`${prefixCls}-drag-helper`}
      onSortEnd={onSortEnd}
      {...props}
      useDragHandle
      axis="x"
      // lockAxis="x"
      hideSortableGhost={false}
      // lockToContainerEdges
    />
  );
  const renderItem = (props: any) => {
    const notDrag =
      props.columnKey === 'RC_TABLE_KEY' ||
      props.columnKey === 'selection' ||
      fixedColumnsKeys?.includes(props.columnKey);

    return notDrag ? (
      <th {...props} />
    ) : (
      <Items
        index={findIndex(columnKeys, (item: string) => item === props.columnKey)}
        key={props.columnKey}
        disabled={notDrag}
        {...props}
      />
    );
  };

  const tableComponent: TableComponents<any> = {
    header: {
      row: renderContainer,
      cell: renderItem,
    },
  };

  return <Table components={tableComponent} columns={newColumns} {...restProps} />;
};

export default DragTable;
