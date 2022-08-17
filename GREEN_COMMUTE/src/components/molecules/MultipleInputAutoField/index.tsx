// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable no-undef */
// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/jsx-key */
import {
  useAutocomplete,
  AutocompleteGetTagProps,
} from '@mui/base/AutocompleteUnstyled'
import CheckIcon from '@mui/icons-material/Check'
import CloseIcon from '@mui/icons-material/Close'
import { Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { useEffect } from 'react'
const Root = styled('div')(
  ({ theme }) => `
  color: ${
    theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.65)' : 'rgba(0,0,0,.85)'
  };
  font-size: 14px;
`
)

const Label = styled('label')`
  padding: 0 0 4px;
  line-height: 1.5;
  display: block;
`

const InputWrapper = styled('div')(
  ({ theme }) => `
  width: 400px;
  border: 1px solid #D6D6D6;
  background-color: ${theme.palette.mode === 'dark' ? '#141414' : '#fff'};
  border-radius: 8px;
  padding: 1px;
  display: flex;
  flex-wrap: wrap;

  &:hover {
    border: 1px solid ${theme.palette.primary[200]};
  }

  &.focused {
    border-color: ${theme.palette.primary[200]};
    
  }
  &.active {
    border-color: ${theme.palette.primary[200]};
    
  }

  & input {
    background-color: ${theme.palette.mode === 'dark' ? '#141414' : '#fff'};
    color: ${
      theme.palette.mode === 'dark'
        ? 'rgba(255,255,255,0.65)'
        : 'rgba(0,0,0,.85)'
    };
    border-radius:8px;
    height: 48px;
    box-sizing: border-box;
    padding: 4px 12px;
    width: 0;
    min-width: 30px;
    flex-grow: 1;
    border: 0;
    margin: 0;
    outline: 0;
  }
  ::-webkit-input-placeholder { 
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    color: #94A196;
  
}
`
)

interface TagProps extends ReturnType<AutocompleteGetTagProps> {
  label: string
}

function Tag(props: TagProps) {
  const { label, onDelete, ...other } = props
  return (
    <div {...other}>
      <span>{label}</span>
      <CloseIcon onClick={onDelete} />
    </div>
  )
}

const StyledTag = styled(Tag)<TagProps>(
  () => `
  display: flex;
  align-items: center;
  width:160px;
  margin: 2px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  background-color: #FFFFFF;
  border: 1px solid #E8FFFC;
  border-radius: 8px;
  box-sizing: content-box;
  padding: 4px 6px;
  outline: 0;
  overflow: hidden;

  &:focus {
   
    background-color: #E8FFFC
  }

  & span {
    overflow: hidden;
    width:180px;
    white-space: nowrap;
    text-overflow: ellipsis;
    background-color: #E8FFFC;
    padding: 8px 12px 8px 12px;
    border-radius : 8px 0px 0px 8px;        
  
  
  }

  & svg {
    font-size: 16px;
    cursor: pointer;
    padding: 8px 12px 8px 0px;
    background-color: #E8FFFC;
    border-radius: 0px 8px 8px 0px;
  
  }
`
)

const Listbox = styled('ul')(
  ({ theme }) => `
  width: 350px;
  margin: 2px 0 0;
  padding: 0;
  position: absolute;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  list-style: none;
  background-color: ${theme.palette.mode === 'dark' ? '#141414' : '#fff'};
  overflow: auto;
  max-height: 250px;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 1;

  & li {
    padding: 5px 12px;
    display: flex;

    & span {
      flex-grow: 1;
    }

    & svg {
      color: transparent;
    }
  }

  & li[aria-selected='true'] {
    background-color: ${theme.palette.mode === 'dark' ? '#2b2b2b' : '#fafafa'};
    font-weight: 600;

    & svg {
      color: #1890ff;
    }
  }

  & li[data-focus='true'] {
    background-color: ${theme.palette.mode === 'dark' ? '#003b57' : '#e6f7ff'};
    cursor: pointer;

    & svg {
      color: currentColor;
    }
  }
`
)
interface Props {
  title: string
  option: any[]
  placeholder: string
  setValue: React.Dispatch<React.SetStateAction<any[] | undefined>>
}

const AutoComplete: React.FC<Props> = (props) => {
  const { title, placeholder, option, setValue } = props
  const {
    getRootProps,
    getInputLabelProps,
    getInputProps,
    getTagProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
    value,
    focused,
    setAnchorEl,
  } = useAutocomplete({
    id: placeholder,
    multiple: true,
    options: option,
    getOptionLabel: (labelOption) => labelOption.title,
  })
  useEffect(() => {
    setValue(value)
  }, [value])

  return (
    <Root>
      <div {...getRootProps()}>
        <Label {...getInputLabelProps()}>
          <Typography variant="subtitle1" data-testid="autoCompleteLabel">
            {title}
          </Typography>
        </Label>
        <InputWrapper
          ref={setAnchorEl}
          className={focused ? 'focused' : ''}
          id="autoCompleteInput"
        >
          {value.map((selectedOption: any, index: number) => (
            <StyledTag
              label={selectedOption.location || selectedOption.name}
              {...getTagProps({ index })}
            />
          ))}
          <input
            {...getInputProps()}
            placeholder={value.length === 0 ? placeholder : ''}
            data-testid="autocompleteInput"
          />
        </InputWrapper>
      </div>
      {groupedOptions.length > 0 ? (
        <Listbox {...getListboxProps()} data-testid="autocompleteList">
          {groupedOptions.map((listOption, index) => (
            <li {...getOptionProps({ option, index })}>
              {/* change here */}
              <span>{listOption.location || listOption.name }</span>
              <CheckIcon fontSize="small" />
            </li>
          ))}
        </Listbox>
      ) : null}
    </Root>
  )
}

export default AutoComplete
