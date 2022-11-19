import { createPopper } from '@popperjs/core';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { createRef, useState } from 'react';

const TableDropdownCustom = ({ updatePageUrl }) => {
  const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false);
  const btnDropdownRef = createRef();
  const popoverDropdownRef = createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: 'left-start',
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

  const handleSubmitDelete = () => {
    alert('not yet implemented');
  };

  return (
    <>
      <a
        className="text-blueGray-500 py-1 px-3"
        href="#pablo"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <i className="fas fa-ellipsis-v"></i>
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? 'block ' : 'hidden ') +
          'bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48'
        }
      >
        <Link href={updatePageUrl ? updatePageUrl : '/update'}>
          <a
            href="/update"
            className={
              'text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700'
            }
          >
            Update
          </a>
        </Link>
        <a
          href="#pablo"
          className={
            'text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700'
          }
          onClick={(e) => {
            e.preventDefault();
            handleSubmitDelete();
          }}
        >
          Delete
        </a>
      </div>
    </>
  );
};

TableDropdownCustom.propTypes = {
  updatePageUrl: PropTypes.string,
};

export default TableDropdownCustom;
